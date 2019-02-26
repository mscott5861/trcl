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
    props.errorMessage && props.errorMessage.length > 0 && props.displayValue && props.displayValue.length > 0 ? '2px solid rgba(200,0,0,0.4)' :
    (props.borderColor ? '1px solid' + props.borderColor : '1px solid #DDD'))};
  border-radius: 4px;
  box-shadow: ${props => props.errorMessage && props.errorMessage.length > 0 && props.displayValue && props.displayValue.length > 0 ? '0 5px 5px 0 rgba(0,0,0,0.1)' : 'none'};
  transform: ${props => props.errorMessage && props.errorMessage.length > 0 && props.displayValue && props.displayValue.length > 0 ? 'scale(1.03)' : 'scale(1)'};
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

export default class Input extends React.Component {
  static propTypes = {
    activeLabel: PropTypes.string,
    activeLabelColor: PropTypes.string,
    bgColor: PropTypes.string,
    borderless: PropTypes.bool,
    borderColor: PropTypes.string,
    errorMessage: PropTypes.string,
    inputID: PropTypes.string,
    labelColor: PropTypes.string,
    maskInput: PropTypes.func,
    required: PropTypes.bool,
    validateInput: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      displayValue: '',
      hasError: this.props.required ? this.props.required : false,
      isFocused: false,
      realValue: '',
    };
  }

  componentWillMount() {
    this.updateForm();
  }

  handleOnKeyDown = (e) => {
    this.props.handleTypeaheadKeydown && this.props.handleTypeaheadKeydown(e);
  }

  tabComplete = (realValue = '') => {
    this.setState({
      realValue,
      displayValue: this.props.maskInput ? this.props.maskInput(realValue) : realValue,
    })
  }
  
  handleOnChange = (e) => {
    e && e.preventDefault();

    if (typeof e !== 'undefined') {
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
      // TODO: enforce a policy that input IDs must be unique on a per-Form basis. 
      // TODO: either enforce caret position for masked inputs to remain at end or
      //       handle the case where user moves caret.
      //------------------------------------------------------------------------------------
      let displayValue = '',
          realValue = typeof e.target !== 'undefined' && e.target.value.length === 1 ?
                        e.target.value :
                          e.target.value.length < this.state.realValue.length ? 
                            this.state.realValue.substring(0, e.target.value.length) :
                              this.state.realValue + e.target.value[e.target.value.length - 1];

                          
      realValue = this.props.validateInput ? this.props.validateInput(realValue, this.props.schema) : realValue;
      displayValue = this.props.maskInput ? this.props.maskInput(realValue) : realValue;
      this.props.handleTypeaheadInput && this.props.handleTypeaheadInput(realValue);

      this.updateActiveLabel();

      this.setState({
        displayValue,
        realValue,
      }, () => {
        this.setState({
          hasError: this.checkForErrors(),
        }, () => {
          this.updateForm();
        });
      });
    }

    e && e.stopPropagation();
  }

  checkForErrors = () => {
    let hasError = (typeof this.props.errorMessage !== 'undefined' && this.props.errorMessage.length > 0 && !(this.state.displayValue.length === 0)) ||
                   (this.props.required && this.state.displayValue !== null && this.state.displayValue.length === 0) ?
          true :
          false;

    return hasError;
  }

  // Need a system for prioritizing the value to display when multiple error states might exist; e.g., 
  // an <Input/> component has its 'required' prop set to true, has a length requirement of more than 
  // 0 characters, and is empty.
  updateActiveLabel = () => {
    
  }

  updateForm = () => {
    this.props.updateForm && this.props.updateForm(this.props.inputID, this.state.realValue, this.state.hasError);
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

    /*if (this.props.cleanup) {
      this.props.cleanup();
    }*/
  }

  render() {
    return (
      <StInputWrapper
        bgColor={this.props.bgColor}
        borderless={this.props.borderless}
        borderColor={this.props.borderColor}
        displayValue={this.state.displayValue}
        errorMessage={this.props.errorMessage}
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
        { this.props.errorMessage && this.state.displayValue.length > 0 && this.props.errorMessage.length > 0 ?
          <StActiveLabel
            activeLabelColor='#C45256'
            isFocused={true}
            required={this.props.required}>
            { this.props.errorMessage }
          </StActiveLabel> :
          <StActiveLabel
            activeLabelColor={this.props.activeLabelColor}
            isFocused={this.state.isFocused}
            required={this.props.required}>
            { this.props.activeLabel && this.props.activeLabel.length > 0 ?
              this.props.activeLabel : this.props.label }
          </StActiveLabel> }
        { this.props.children }
      </StInputWrapper>
    );
  }
}
