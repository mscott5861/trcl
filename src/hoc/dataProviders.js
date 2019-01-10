import React from 'react'
import { isRequired } from 'utilities'


//----------------------------------------------------------------------------------
// Swappable data provider HOCs, allowing wrapped components to consume
// {data} props for a variety of source types (files/protocols). Each
// HOC should accept a {src} prop (e.g., "ws://localhost:8080" or "file://path")
// and provide its wrapped component with a {data} prop. Currently stubbed in place
// without significant testing.
//----------------------------------------------------------------------------------

export const withWSDataProvider = (WrappedComponent, src) => {
  return class extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        src,
        data: []
      };

      this.ws = new WebSocket(this.state.src);
    }

    componentWillMount() {
      this.ws.onmessage = (e) => {
        if (e.data) {
          this.setState({
            data: e.data
          });
        }
      }

      this.ws.onerror = (e) => {
        console.log("Error on Websocket connection with " + this.state.src + " -> " + e.message);
      }
    }

    componentWillUnmount() {
      this.ws.close();
    }

    render() {
      return(
        <WrappedComponent
            data={this.state.data}
            {...this.props} />
      );
    }
  }
}

export const withHTTPDataProvider = (WrappedComponent, src) => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        data: [] 
      };
    }

    componentWillMount() {
      fetch(src)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          this.setState({
            data: json
          });
        });
    }

    render() {
      return(
        <WrappedComponent
          data={this.state.data}
          {...this.props}/>
      );
    }
  }
}

export const withSubmitHandler = (WrappedComponent, 
                                  formRef=isRequired('a reference to the form is required for this HOC.'), 
                                  onSubmit=isRequired('an onSubmit function prop is required for this HOC.')) => {
  return class extends React.Component {
    onSubmit = () => {
      let data = formRef.current.getElements(); 
      onSubmit && onSubmit(data);
    }

    render() {
      return(
        <WrappedComponent
          {...this.props}/>
      );
    }
  }
}
