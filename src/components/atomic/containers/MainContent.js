import React from 'react'
import styled from 'styled-components'

const StyledMainContent = styled.div`
  padding: 2rem 3rem;
`

export default class MainContent extends React.Component {
  render() {
    return (
      <StyledMainContent className='main-content'>
        { this.props.children }
      </StyledMainContent>
    );
  }
}

