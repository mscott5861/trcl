import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StModal = styled.div`
  position: fixed;
  top: ${props => props.isVisible ? '4rem' : '-100vh'};
  left: 50%;
  transform: translateX(-50%);
  padding: 2rem 3rem;
  border-radius: 4px;
  background-color: ${props => props.bgColor ? props.bgColor : '#FFF'};
  width: 600px;
  border: 1px solid #DDD;
  transition: top .35s cubic-bezier(0.92, 0.04, 0.16, 1.1);
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.05), 
              -10px 8px 15px rgba(0, 0, 0, 0.05), 
              10px 8px 15px rgba(0, 0, 0, 0.05);
  z-index: 10;

  @media(max-width: 1366px) {
    
  }

  @media(max-width: 768px) {
    width: 80vw;
  }
`

const StBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.125);
  z-index: 2;
  opacity: ${props => props.isVisible ? 1 : 0};
  pointer-events: ${props => props.isVisible ? 'initial' : 'none'};
  transition: opacity .2s linear;
  
`

export default class Modal extends React.Component {
  static propTypes = {
    bgColor: PropTypes.string,
    handleOnClick: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <div>
        <StBackdrop
          onClick={this.props.handleOnClick}
          isVisible={this.props.isVisible}/>
        <StModal
          isVisible={this.props.isVisible}>
          { this.props.children }   
        </StModal>
      </div>
    );
  }
}