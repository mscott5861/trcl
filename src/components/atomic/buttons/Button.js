import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 100%;
  margin-top: 2rem;
  border-radius: 6px;
  background: ${props => props.bgColor ? props.bgColor : '#333'};
  cursor: pointer;
`

const StLabel = styled.p`
  color: ${props => props.labelColor ? props.labelColor : '#FFF'};
`

export default class Button extends React.Component {
  handleOnClick = () => {
    if (this.props.handleOnClick) {
      this.props.handleOnClick();
    }
  }


  render() {
    return (
      <StButton
        onClick={this.handleOnClick}>
        <StLabel
          labelColor={this.props.labelColor}>
          { this.props.label }
        </StLabel>
      </StButton>
    );
  }
}

Button.propTypes = {
  handleOnClick: PropTypes.func,
  label: PropTypes.string,
  labelColor: PropTypes.string,
}

