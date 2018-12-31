import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StNavbar = styled.div`
  background-color: ${props => props.bgColor ? props.bgColor : 'grey'};
  color: ${props => props.color ? props.color : '#fff'};
  padding: .5rem 2rem;
`

export default function Navbar(props) {
  return (
    <StNavbar 
      className='navbar'
      color={props.textColor}
      bgColor={props.bgColor}>
      { props.children }
    </StNavbar>
  );
}

Navbar.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
}
