import React from 'react'
import styled from 'styled-components'
import { isRequired } from 'utilities'



//----------------------------------------------------------------------------------
// Swappable input helper HOCs for standard input functionality (typeahead, vali-
// dation, error state handling, disabling/enabling, etc.)
//----------------------------------------------------------------------------------
export const withMask = (WrappedInput, mask = isRequired('mask is a required parameter for the withMask HOC.')) => {
  return class extends React.Component {
    maskInput = (inputReceived) => {
      let displayValue = '';

      for (let i = 0; i < inputReceived.length; i++) {
        displayValue += mask;
      }

      
      return displayValue;
    }

    render() {
      return (
        <WrappedInput
          maskInput={this.maskInput}
          {...this.props} />
      );
    }
  }
}


// TODO: function stub
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


const StStatusBlock = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  width: 35px;
  background: ${props => props.valid === null || props.inputIsEmpty ? 'transparent' : props.valid ? 'linear-gradient(to right, rgba(0, 255, 0, 0), rgba(0, 255, 0, 0.1))' : 'linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,0.1))'};

linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))
  transition: background .15s linear;
`

const StValidationIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0.5rem;

  & span {
    position: absolute;
    height: 1px;
    width: calc(100% - 1rem);
    transition: all .15s linear;
    box-sizing: border-box;
    border-radius: 3px;
  }

  & span:nth-child(1) {
    top: ${props => props.status === 'empty' ? '50%' : 
                    props.status === 'hasError' ? 'initial' :
                    '55%'};
    left: ${props => props.status === 'empty' ? '50%' : 'initial'};
    transform: ${props => props.status === 'empty' ? 'translateY(-50%) translateX(-50%)' : 'rotate(45deg)'};
    background-color: ${props => props.status === 'empty' ? '#777' :
                                 props.status === 'hasError' ? '#C45256' :
                                 '#55C452'};
    width: ${props => props.status === 'empty' ? '0%' :
             (props.status === 'valid' ? '0.55rem' : 'calc(100% - 1rem)')};
  }

  & span:nth-child(2) {
    background-color: ${props => props.status === 'empty' ? '#777' :
                                 props.status === 'hasError' ? '#C45256' :
                                 '#55C452'};
    top: initial;
    width: ${props => props.status === 'empty' ? '0' : props.status === 'valid' && '1rem'};
    left: ${props => props.status === 'valid' && '0.75rem'};
    transform: ${props => props.status === 'empty' ? 'rotate(90deg)' : 
                 props => props.status === 'hasError' ? 'rotate(-45deg)' :
                 'rotate(-45deg)'};
    }
  }

`

const ValidationIcon = function(props) {
  return (
    <StValidationIcon
      status={props.status}>
      <span/>
      <span/> 
    </StValidationIcon>
  );
}


export const withValidation = (WrappedInput, schemaPackage = isRequired('schemaPackage is a required object for the withValidation HOC.')) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        valid: null,
        inputIsEmpty: true,
        errorMessage: '',
      }
    }

    validateInput = (inputReceived) => {
      let regex = new RegExp(schemaPackage.schema),
          valid = regex.test(inputReceived);

      this.setState({
        valid,
        inputIsEmpty: (inputReceived.length === 0),
        errorMessage: (!valid ? schemaPackage.errorMessage : ''),
      });

      return inputReceived;
    }

    render() {
      return (
        <WrappedInput
          errorMessage={this.state.errorMessage}
          validateInput={this.validateInput}
          {...this.props}>
          <StStatusBlock
            valid={this.state.valid}
            inputIsEmpty={this.state.inputIsEmpty}>
            <ValidationIcon
              status={this.state.inputIsEmpty ? 'empty' : (this.state.errorMessage && this.state.errorMessage.length > 0 ?
                      'hasError' : 'valid')}/>
          </StStatusBlock>
        </WrappedInput>
      );
    }
  }
}
