import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'



const StInputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 2.25rem;
  border: ${props => props.borderless ? '0' : (
    (props.borderColor ? '1px solid' + props.borderColor : '1px solid #CCC'))};
  border-radius: 4px;
  margin-top: 2rem;
  background-color: ${props => props.bgColor ? props.bgColor : (props.inputActive ? '#FFF' : '#F2F2F2')};
  transition: background-color linear .25s;
`

const StInput = styled.input`
  position: absolute;
  outline: none;
  background: transparent;
  border: 0px;
  height: 98%;
  width: 100%;
  padding-left: 1rem;
`

const StLabel = styled.p`
  opacity: ${props => props.inputActive ? '0' : '1'};
  transform: ${props => props.inputActive ? 'rotateY(-180deg)' : 'rotateY(0deg)'};
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
  opacity: ${props => props.inputActive ? '1' : '0'};
  /*transform: ${props => props.inputActive ? 'rotateY(0deg)' : 'rotateY(-180deg)'};*/
  position: absolute;
  top: -1.25rem;
  color: ${props => props.activeLabelColor ? props.activeLabelColor : '#333'};
  left: .25rem;
  left: ${props => props.inputActive ? '.25rem' : '25%'};
  font-size: .65rem;
  letter-spacing: .125rem;
  transition: all .15s linear;
  pointer-events: none;
`

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      displayValue: '',
      inputActive: false,
      realValue: '',
    };
  }

  
  handleOnChange = (e) => {
    let displayValue = '',
        inputReceived = e.target.value,
        realValue = inputReceived.length - 1 >= 0 ? (
                      inputReceived[inputReceived.length - 1] === '*' ? 
                          this.state.realValue.substring(0, this.state.realValue.length - 1) : 
                          this.state.realValue + inputReceived[inputReceived.length - 1]) : 
                      '';

    realValue = this.props.validateInput ? this.props.validateInput(realValue, this.props.schema) : realValue;
    displayValue = this.props.maskInput ? this.props.maskInput(realValue) : realValue;
    
    this.setState({
      realValue,
      displayValue,
    }, () => {
      this.props.updateForm && this.props.updateForm(this.props.inputID, this.state.realValue);
    });

    e.stopPropagation();
  }

  handleOnFocus = () => {
    this.setState({
      inputActive: true
    });
  }

  handleOnBlur = () => {
    if (this.state.realValue === '') {
      this.setState({
        inputActive: false
      });
    }
  }

  getValueToDisplay = () => {
    if (this.props.displayValue !== '') {
      return this.props.displayValue;
    } else if (this.state.realValue !== '') {
      return this.state.realValue;
    } else {
      return '';
    }
  }


  render() {
    return (
      <StInputWrapper
        bgColor={this.props.bgColor}
        borderless={this.props.borderless}
        borderColor={this.props.borderColor}
        error={this.props.error}
        inputActive={this.state.inputActive}
        onChange={this.handleOnChange}>
        <StInput
          onBlur={this.handleOnBlur}
          onChange={this.handleOnChange}
          onFocus={this.handleOnFocus}
          value={this.state.displayValue}/>
        <StLabel
          labelColor={this.props.labelColor}
          inputActive={this.state.inputActive}>
          { this.props.label }
        </StLabel>
        <StActiveLabel
          activeLabelColor={this.props.activeLabelColor}
          inputActive={this.state.inputActive}>
          { this.props.label }
        </StActiveLabel>
        { this.props.children }
      </StInputWrapper>
    );
  }
}


Input.propTypes = {
  activeLabelColor: PropTypes.string,
  bgColor: PropTypes.string,
  borderless: PropTypes.bool,
  borderColor: PropTypes.string,
  handleInputReceived: PropTypes.func,
  inputID: PropTypes.string,
  labelColor: PropTypes.string,
}
