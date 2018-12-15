import React from 'react'
import styled from 'styled-components'

const StyledSidebar = styled.div`
  background-color: #555;
`

export default class Sidebar extends React.Component {
  render() {
    return (
      <StyledSidebar className='sidebar'>
        { this.props.children }
      </StyledSidebar>
    );
  }
}

 
