import React from 'react'
import styled from 'styled-components'
import { Popover } from 'components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons'



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
  background: ${props => props.valid === null || props.emptyString ? 'transparent' : props.valid ? 'rgba(0, 255, 0, 0.075)' : 'rgba(255, 0, 0, 0.075)'};
  transition: background .15s linear;
`

export const withValidation = (WrappedInput, schemaPackage) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        valid: null,
        emptyString: true,
      }
    }

    validateInput = (inputReceived) => {
      let regex = new RegExp(schemaPackage.schema),
          valid = regex.test(inputReceived);

      this.setState({
        valid,
        emptyString: (inputReceived.length === 0)
      });

      return inputReceived;
    }

    render() {
      return (
        <WrappedInput
          error={this.state.error}
          validateInput={this.validateInput}
          {...this.props}>
          <StErrorBlock
            valid={this.state.valid}
            emptyString={this.state.emptyString}>
            { this.state.valid === null || this.state.emptyString ? <FontAwesomeIcon icon={faMinus} color='#777'/> : 
              this.state.valid ?
              <FontAwesomeIcon icon={faCheck} color='#55C452'/> :   // green
              <FontAwesomeIcon icon={faTimes} color='#C45256'/>     // red
            }
          </StErrorBlock>
        </WrappedInput>
      );
    }
  }
}
