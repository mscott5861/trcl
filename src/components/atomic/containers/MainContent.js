import React from 'react'
import styled from 'styled-components'

const StyledMainContent = styled.div`
  padding: 3rem;

  @meda(max-width: 768px) {
    padding: 1rem 2rem;
  }
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

