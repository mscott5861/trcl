import React from 'react'
import styled from 'styled-components'



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

const StStatusBlock = styled.div`
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
  background: ${props => props.valid === null || props.emptyString ? 'transparent' : props.valid ? 'rgba(0, 255, 0, 0.075)' : 'rgba(255, 0, 0, 0.075)'};
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
    height: 3px;
    width: calc(100% - 1rem);
    transition: all .15s linear;
    box-sizing: border-box;
    border-radius: 3px;
  }

  & span:nth-child(1) {
    top: ${props => props.status === 'empty' ? '50%' : 
                    props.status === 'hasError' ? 'initial' :
                    '55%'};
    transform: ${props => props.status === 'empty' ? 'transformY(-50%)' : 'rotate(45deg)'};
    background-color: ${props => props.status === 'empty' ? '#777' :
                                 props.status === 'hasError' ? '#C45256' :
                                 '#55C452'};
    width: ${props => props.status === 'valid' && '0.55rem'};
  }

  & span:nth-child(2) {
    background-color: ${props => props.status === 'empty' ? 'transparent' :
                                 props.status === 'hasError' ? '#C45256' :
                                 '#55C452'};
    top: initial;
    width: ${props => props.status === 'valid' && '1rem'};
    left: ${props => props.status === 'valid' && '0.75rem'};
    transform: ${props => props.status === 'empty' ? 'transformY(-50%)' : 
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

export const withValidation = (WrappedInput, schemaPackage) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        valid: null,
        emptyString: true,
        errorMessage: '',
      }
    }

    validateInput = (inputReceived) => {
      let regex = new RegExp(schemaPackage.schema),
          valid = regex.test(inputReceived);

      this.setState({
        valid,
        emptyString: (inputReceived.length === 0),
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
            emptyString={this.state.emptyString}>
            <ValidationIcon
              status={this.state.emptyString ? 'empty' : (this.state.errorMessage && this.state.errorMessage.length > 0 ?
                      'hasError' : 'valid')}/>
          </StStatusBlock>
        </WrappedInput>
      );
    }
  }
}
