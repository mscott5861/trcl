import React from 'react'
import styled from 'styled-components'

const StSidebar = styled.div`
  background-color: #555;
`

export default class Sidebar extends React.Component {
  render() {
    return (
      <StSidebar className='sidebar'>
        { this.props.children }
      </StSidebar>
    );
  }
}

 
