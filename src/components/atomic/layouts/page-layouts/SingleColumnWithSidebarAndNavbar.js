import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'



const StSingleColumnWithSidebarAndNavbar = styled.div`
  display: grid; 
  grid-template-columns: 15rem 1fr;
  grid-template-rows: 5rem 1fr;

  .main-content {
    grid-row: 2 / span 1;   
    grid-column: 2 / span 1;
  }

  .navbar {
    grid-row: 1 / span 1;
    grid-column: 1 / span 2;
  }

  .sidebar {
    grid-row: 2 / span 1;
    grid-column: 1 / span 1;
    min-height: calc(100vh - 5rem); 
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

export default function SingleColumnWithSidebarAndNavbar(props) {
  return (
    <StSingleColumnWithSidebarAndNavbar>
      { props.children }
    </StSingleColumnWithSidebarAndNavbar>
  );
}

SingleColumnWithSidebarAndNavbar.propTypes = {
  children: PropTypes.node.isRequired,
}
