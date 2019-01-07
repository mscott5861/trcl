import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'



//----------------------------------------------------------------------------------
// Swappable input helper HOCs for standard input functionality (typeahead, vali-
// dation, error state handling, disabling/enabling, etc.) Currently just stubbed.
//----------------------------------------------------------------------------------

export const withTypeAhead = (WrappedInput, value) => {
  return class extends React.Component {
    render() {
      return (
        <WrappedInput
            value={this.state.value}
            {...this.props} />
      );
    }
  }
}

export const withMask = (WrappedInput, mask) => {
  return class extends React.Component {
    constructor() {
      super();

      this.state = {
        displayValue: '',
        realValue: '',
      }
    }

    handleInputReceived = (inputReceived) => {
      let displayValue = '',
          realValue = inputReceived.length - 1 >= 0 ? (
                        inputReceived[inputReceived.length - 1] === '*' ? 
                          this.state.realValue.substring(0, this.state.realValue.length - 1) : 
                          this.state.realValue + inputReceived[inputReceived.length - 1]) : 
                      '';

      for (let i = 0; i < realValue.length; i++) {
        displayValue += mask;
      }

      this.setState({
        displayValue,
        realValue,
      });

      return realValue;
    }

    render() {
      return (
        <WrappedInput
          displayValue={this.state.displayValue}
          realValue={this.state.realValue}
          handleInputReceived={this.handleInputReceived}
          {...this.props} />
      );
    }
  }
}

const StErrorBlock = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  height: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 35px;
  border-left: 1px solid #CCC;
  background-color: ${props => props.error ? 'rgba(255,0,0,0.1)' : 'rgba(0,255,0,0.1)'};
  transition: background-color .25s linear;
`

export const withValidation = (WrappedInput, schema) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: ''
      }
    }

    handleInputReceived = (inputReceived) => {
      if (inputReceived[0] === 'o') {
        this.setState({
          error: 'too much'
        });
      } else {
        this.setState({
          error: ''
        });
      }
      console.log(inputReceived);
      return inputReceived;
    }

    render() {
      return (
        <WrappedInput
          error={this.state.error}
          handleInputReceived={this.handleInputReceived}
          {...this.props}>
          <StErrorBlock
            error={this.state.error}>
            { this.state.error ?
              <FontAwesomeIcon icon={faTimes} color='red'/> : 
              <FontAwesomeIcon icon={faCheck} color='green'/> 
            }
          </StErrorBlock>
        </WrappedInput>
      );
    }
  }
}
