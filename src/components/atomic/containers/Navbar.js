import React from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.div`
  background-color: grey;
`

export default class Navbar extends React.Component {
  render() {
    return (
      <StyledNavbar className='navbar'>
        { this.props.children }
      </StyledNavbar>
    );
  }
}

 
