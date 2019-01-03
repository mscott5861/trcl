import React from 'react'
import styled from 'styled-components'

const StMainContent = styled.div`
  padding: 2rem 3rem;

  @meda(max-width: 768px) {
    padding: 1rem 2rem;
  }
`

export default class MainContent extends React.Component {
  render() {
    return (
      <StMainContent className='main-content'>
        { this.props.children }
      </StMainContent>
    );
  }
}

