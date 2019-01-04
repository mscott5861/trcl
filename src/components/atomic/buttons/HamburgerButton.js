import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'



/*---------------------------------------------------------------
 *  A hamburger button, as often seen in navigation bars. Expects
 *  a callback function, handleHamburgerButtonClick, to let it
 *  know what occurs when a user clicks on the button.
 *---------------------------------------------------------------*/
 
const StHamburgerButton = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  overflow: hidden;
  outline: none;
  width: 35px;
  height: 30px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .1s ease-in-out;
  -moz-transition: .1s ease-in-out;
  -o-transition: .1s ease-in-out;
  transition: .1s ease-in-out;
  cursor: pointer;

  & span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: ${props => props.buttonColorUnclicked ? props.buttonColorUnclicked : '#fff'};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }

  & span:nth-child(1) {
    top: 0px;
    transition: .1s ease-in;
  }

  & span:nth-child(2), & span:nth-child(3) {
    top: 12px;
  }

  & span:nth-child(3) {
    top: 24px;
  }

  &.open span:nth-child(1),
  &.open span:nth-child(2),
  &.open span:nth-child(3) {
    background: ${props => props.buttonColorClicked ? props.buttonColorClicked : '#fff'}
  }

  &.open span:nth-child(2) {
    top: 12px;
    transform: translateX(-100%);
  }

  &.open span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: 12px;
    transition-delay: .1s;
  }

  &.open span:nth-child(3) {
    -webkit-transform: rotate(-405deg);
    -moz-transform: rotate(-405deg);
    -o-transform: rotate(-405deg);
    transform: rotate(-405deg);
    top: 12px;
    transition-delay: .1s;
  }

  &.open span:nth-child(4) {
    top: 12px;
    width: 0%;
    left: 50%;
  }

  &.open span {
    background: #fff;
  }
`


export default class HamburgerButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  handleHamburgerButtonClick = () => {
    this.setState({
      clicked: !this.state.clicked
    }, () => {
      this.props.onHamburgerButtonClick(); 
    });
  }

  render() {
    return (
      <StHamburgerButton
        animationVariant={this.props.animationVariant}
        buttonColorClicked={this.props.buttonColorClicked}
        buttonColorUnclicked={this.props.buttonColorUnclicked}
        className={this.state.clicked ? 'open' : ''}
        onClick={this.handleHamburgerButtonClick}>
        <span></span>
        <span></span>
        <span></span>
      </StHamburgerButton>
    );
  }
}

HamburgerButton.propTypes = {
  animationVariant: PropTypes.oneOf(['1', '2', '3', '4']),
  buttonColorClicked: PropTypes.string,
  buttonColorUnclicked: PropTypes.string,
  onHamburgerButtonClick: PropTypes.func.isRequired
}
