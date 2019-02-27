import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'



//----------------------------------------------------------------------------
// A basic <Input/> component that maintains copies of a 'real' and a 'display'
// value (for cases in which masks are needed), and also maintains its own
// error state, which it reports upward to a parent <Form/> component.
//
// Made to be composable. Currently, additional functionality (such as validation 
// or masking) can be added by wrapping the component in the desired HOC.
//----------------------------------------------------------------------------

const StInputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 2.25rem;
  border: ${props => props.borderless ? '0' : (
    (props.failsRequiredCheck || props.failsValidationCheck) ? '2px solid rgba(200,0,0,0.4)' :
    (props.borderColor ? '1px solid' + props.borderColor : '1px solid #DDD'))};
  border-radius: 4px;
  box-shadow: ${props => (props.failsRequiredCheck || props.failsValidationCheck) ? '0 5px 5px 0 rgba(0,0,0,0.1)' : 'none'};
  transform: ${props => (props.failsRequiredCheck || props.failsValidationCheck) ? 'scale(1.03)' : 'scale(1)'};
  margin-top: 2rem; 
  background-color: ${props => props.errorMessage && props.errorMessage.length > 0 && props.displayValue.length > 0 ? 'rgba(255,0,0,0.05)' : (props.bgColor ? props.bgColor : (props.isFocused ? '#FFF' : '#F2F2F2'))};
  transition: all ease-in .15s;
  z-index: 10;
`

const StInput = styled.input`
  position: absolute;
  outline: none;
  background: transparent;
  border: 0px;
  height: 98%;
  width: 100%;
  padding-left: 1rem;
  font-size: .75rem;
  letter-spacing: .025rem;
  line-height: 2rem;
`

const StLabel = styled.p`
  opacity: ${props => props.isFocused ? '0' : '1'};
  transform: ${props => props.isFocused ? 'rotateY(-180deg)' : 'rotateY(0deg)'};
  position: absolute;
  left: 1rem;
  font-size: .65rem;
  color: ${props => props.labelColor ? props.labelColor : '#555'};
  letter-spacing: .125rem;
  transition: all .25s linear;
  line-height: 2rem;
  pointer-events: none;
`

const StActiveLabel = styled.p`
  opacity: ${props => props.isFocused ? '1' : '0'};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  top: -1.25rem;
  color: ${props => props.activeLabelColor ? props.activeLabelColor : '#333'};
  left: .25rem;
  left: ${props => props.isFocused ? '.25rem' : '25%'};
  font-size: .65rem;
  transition: all .15s linear;
  pointer-events: none;

  &::before {
    display: inline-block;
    content: ${props => props.required ? '"*"' : ''};
    color: red;
    margin-right: 4px;
  }
`
//-----------------------------------------------------------------------------------
// TODO: enforce a policy that inputIDs must be unique on a per-Form basis. 
//-----------------------------------------------------------------------------------
export default class Input extends React.Component {
  static propTypes = {
    activeLabel: PropTypes.string,
    activeLabelColor: PropTypes.string,
    bgColor: PropTypes.string,
    borderless: PropTypes.bool,
    borderColor: PropTypes.string,
    inputID: PropTypes.string.isRequired,
    labelColor: PropTypes.string,
    maskInput: PropTypes.func,
    required: PropTypes.bool,
    valid: PropTypes.bool,
    validateInput: PropTypes.func,
    validationErrorMessage: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      displayValue: '',
      inputFailsRequiredCheck: false,
      inputFailsValidationCheck: false,
      isFocused: false,
      realValue: '',
    };
  }

  componentWillMount() {
    this.updateForm();
  }

  handleOnKeyDown = (e) => {
    this.props.handleTypeaheadKeydown && typeof this.props.handleTypeaheadKeydown !== 'undefined' && this.props.handleTypeaheadKeydown(e);
  }

  tabComplete = (realValue = '') => {
    this.setState({
      realValue,
      displayValue: this.props.maskInput ? this.props.maskInput(realValue) : realValue,
    }, () => {
      this.updateForm()
    })
  }
  
  handleOnChange = (e) => {
    if (e && typeof e !== 'undefined') {
      e.preventDefault();
      //------------------------------------------------------------------------------------
      // We need to do a few things on every keystroke:
      //
      // 1. Keep track of the 'real' input value (un-masked)
      // 2. Update the 'display' input value, if applicable
      // 3. Perform validation, if applicable, and keep track of whether or not this
      //    <Input/> is in an error state
      // 4. Update the 'active' (hovering) label, if applicable
      // 5. Send some information up to our <Form/> component (the 'real' input value of
      //    our component, a unique string to identify it, and whether or not the 
      //    component is in an error state.)
      //------------------------------------------------------------------------------------
      let caretPosition = e.target.selectionStart, 
          displayValue = '',
          realValue = typeof e.target !== 'undefined' && e.target.value.length === 1 ?
                        e.target.value :
                          e.target.value.length < this.state.realValue.length ? 
                            this.state.realValue.substring(0, e.target.value.length) :
                              this.state.realValue.substr(0, caretPosition - 1) + e.target.value[caretPosition - 1] + this.state.realValue.substr(caretPosition - 1);
      
      realValue = this.props.validateInput ? this.props.validateInput(realValue, this.props.schema) : realValue;
      displayValue = this.props.maskInput ? this.props.maskInput(realValue) : realValue;
      this.props.handleTypeaheadInput && this.props.handleTypeaheadInput(realValue);

      this.updateActiveLabel();

      this.setState({
        displayValue,
        realValue,
      }, () => {
        this.setState({
          inputFailsRequiredCheck: this.failsRequiredCheck(),
          inputFailsValidationCheck: this.failsValidationCheck(),
        }, () => {
          this.updateForm();
        });
      });
      e.stopPropagation();
    }
  }

  failsRequiredCheck = () => {
    return typeof this.props.required !== 'undefined' && this.props.required === true && this.state.realValue.length === 0;
  }

  failsValidationCheck = () => {
    return typeof this.props.valid !== 'undefined' && this.props.valid === false;
  }

  checkForErrors = () => {
    this.setState({
      inputFailsRequiredCheck: this.failsRequiredCheck(),
      inputFailsValidationCheck: this.failsValidationCheck(),
    }, () => {
      return this.state.inputFailsRequiredCheck || this.state.inputFailsValidationCheck;
    })
  }

  // TODO: Need a system for prioritizing the value to display when multiple error states might exist; e.g., 
  // an <Input/> component has its 'required' prop set to true and is empty, but also has a length requirement
  // of at least 4 characters (it would have conflicting "This is a required field" and "This field needs at
  // least 4 characters" messages)
  updateActiveLabel = () => {
    
  }

  updateForm = () => {
    this.props.updateForm && typeof this.props.updateForm !== 'undefined' && this.props.updateForm(this.props.inputID, 
      this.state.realValue, (this.state.inputFailsRequiredCheck || this.state.inputFailsValidationCheck));
  }

  handleOnFocus = () => {
    this.setState({
      isFocused: true
    });
  }

  handleOnBlur = () => {
    if (this.state.realValue === '') {
      this.setState({
        isFocused: false
      });
    }
    this.checkForErrors();
    this.props.cleanup && typeof this.props.cleanup !== 'undefined' && this.props.cleanup(true);
  }

  render() {
    return (
      <StInputWrapper
        bgColor={this.props.bgColor}
        borderless={this.props.borderless}
        borderColor={this.props.borderColor}
        displayValue={this.state.displayValue}
        failsRequiredCheck={this.state.inputFailsRequiredCheck}
        failsValidationCheck={this.state.inputFailsValidationCheck}
        isFocused={this.state.isFocused}
        onChange={this.handleOnChange}>
        <StInput
          onBlur={this.handleOnBlur}
          onChange={this.handleOnChange}
          onKeyDown={this.handleOnKeyDown}
          onFocus={this.handleOnFocus}
          value={this.state.displayValue}/>
        <StLabel
          labelColor={this.props.labelColor}
          isFocused={this.state.isFocused}>
          { this.props.label }
        </StLabel>
        { typeof this.props.valid !== 'undefined' && this.failsValidationCheck() ?
          <StActiveLabel
            activeLabelColor='#C45256'
            isFocused={true}
            required={this.props.required}>
            { this.props.validationErrorMessage }
          </StActiveLabel> :
          ( this.props.required && typeof this.props.required !== 'undefined' && this.state.inputFailsRequiredCheck ?
            <StActiveLabel
              activeLabelColor='#C45256'
              isFocused={true}
              required={this.props.required}>
              { "This field is required" }
            </StActiveLabel> :
          <StActiveLabel
            activeLabelColor={this.props.activeLabelColor}
            isFocused={this.state.isFocused}
            required={this.props.required}>
            { this.props.activeLabel && this.props.activeLabel.length > 0 ?
              this.props.activeLabel : this.props.label }
          </StActiveLabel>) }
        { this.props.children }
      </StInputWrapper>
    );
  }
}
