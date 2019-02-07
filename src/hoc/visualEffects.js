import React from 'react'

export const withParallax = (WrappedComponent, depth) => {
  return class extends React.Component {
    constructor() {
      super();
      let style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = `.plx { 
        perspective: 1px;
        -webkit-perspective-origin-x: 100%;
        perspective-origin-x: 100%;
        -webkit-overflow-scrolling: touch;
        height: 100vh;
        overflow-x: hidden;
        overflow-y: scroll;
      }`;
 
      document.getElementsByTagName('head')[0].appendChild(style);
    }

    componentWillMount() {
      document.body.classList.add(this.style);
    }

    componentWillUnmount() {
      document.body.classList.remove(this.style);
    }

    render() {
      return(
        <WrappedComponent
            {...this.props} />
      );
    }
}

