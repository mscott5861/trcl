import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StSidebar = styled.div`
  background-color: #555;
`

export default function Sidebar(props) {
  return (
    <StSidebar className='sidebar'>
      { props.children }
    </StSidebar>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired, 
}
 
