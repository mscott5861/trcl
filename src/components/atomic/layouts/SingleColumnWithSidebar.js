import React from 'react'
import styled from 'styled-components'

const StyledSingleColumnWithSidebar = styled.div`
  display: grid; 
  grid-template-columns: 15rem 1fr;
  grid-template-rows: 1fr;

  .main-content {
    grid-column: 2 / span 1;
  }

  .sidebar {
    grid-column: 1 / span 1;
    min-height: calc(100vh); 
  }

  @media(max-width: 1024px) {
    grid-template-columns: 1fr;

    .sidebar {
      position: absolute;
      top: 0;
      left: -17rem;
      width: 17rem;
      z-index: 1000;
    }
  }
`

export default class SingleColumnWithSidebar extends React.Component {
  render() {
    return (
      <StyledSingleColumnWithSidebar>
        { this.props.children }
      </StyledSingleColumnWithSidebar>
    );
  }
}
