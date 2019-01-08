import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 100%;
  margin-top: 2rem;
  border-radius: 6px;
  background: ${props => props.bgColor ? props.bgColor : '#333'};
  cursor: ${props => props.hasError ? 'not-allowed' : 'pointer'};
  transition: opacity .15s linear;
  outline: none;
  border: none;
  opacity: ${props => props.hasError ? '0.5' : '1'};

  &:hover,
  &:focus {
    opacity: 0.75;
    outline: none;
  }
`

const StLabel = styled.p`
  color: ${props => props.labelColor ? props.labelColor : '#FFF'};
`

export default class Button extends React.Component {
  onClick = () => {
    if (this.props.onClick && !this.props.hasError) {
      this.props.onClick();
    }
  }

  onFocus = () => {
  }

  render() {
    return (
      <StButton
        bgColor={this.props.bgColor}
        hasError={this.props.hasError}
        onClick={this.onClick}
        onFocus={this.onFocus}
        type='submit'
        tabIndex='0'>
        <StLabel
          labelColor={this.props.labelColor}>
          { this.props.label }
        </StLabel>
      </StButton>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string,
  labelColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

