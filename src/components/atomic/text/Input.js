import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'



const StInputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 2.25rem;
  border: ${props => props.borderless ? '0' : (
    props.borderColor ? '1px solid' + props.borderColor : '1px solid #BBB')};
  border-radius: 5px;
  margin-top: 2rem;
  background-color: ${props => props.bgColor ? props.bgColor : '#FFF'};
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
  transform: ${props => props.inputActive ? 'scale(0)' : 'scale(1)'};
  position: absolute;
  left: 1rem;
  font-size: .65rem;
  color: ${props => props.labelColor ? props.labelColor : '#888'};
  letter-spacing: .125rem;
  transition: all .25s linear;
  line-height: 2rem;
  pointer-events: none;
`

const StActiveLabel = styled.p`
  opacity: ${props => props.inputActive ? '1' : '0'};
  position: absolute;
  top: -1.25rem;
  color: ${props => props.activeLabelColor ? props.activeLabelColor : '#333'};
  left: .25rem;
  font-size: .65rem;
  letter-spacing: .125rem;
  transition: all .25s linear;
  pointer-events: none;
`

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      inputActive: false,
      realValue: '',
    };

    this.textInput = React.createRef();
  }

  
  handleOnChange = (e) => {
    let realValue = this.props.handleInputReceived ? this.props.handleInputReceived(e.target.value) : e.target.value;
    
    this.setState({
      realValue
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

  getDisplayValue = () => {
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
        onChange={this.handleOnChange}>
        <StInput
          onBlur={this.handleOnBlur}
          onChange={this.handleOnChange}
          onFocus={this.handleOnFocus}
          value={this.getDisplayValue()}
          ref={this.textInput}/>
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
