import React from 'react'
import styled from 'styled-components'

const StPaddedContent = styled.div`
  padding: 2rem 3rem;

  @media(max-width: 768px) {
    padding: 1rem 2rem;
  }
`

export default class PaddedContent extends React.Component {
  render() {
    return (
      <StPaddedContent className='main-content'>
        { this.props.children }
      </StPaddedContent>
    );
  }
}

