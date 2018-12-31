import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StNavbar = styled.div`
  position: ${props => props.sticky ? 'fixed' : 'static'};
  background-color: ${props => props.bgColor ? props.bgColor : 'grey'};
  color: ${props => props.color ? props.color : '#fff'};
  padding: .5rem 2rem;
  width: 100%;
  z-index: 1000;
`

export default function Navbar(props) {
  return (
    <StNavbar 
      bgColor={props.bgColor}
      className='navbar'
      color={props.textColor}
      sticky={props.sticky}>
      { props.children }
    </StNavbar>
  );
}

Navbar.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  sticky: PropTypes.bool
}
