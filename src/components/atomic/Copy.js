import React from 'react'
import styled from 'styled-components'

const StyledCopy = styled.p`
  font-size: 1rem;
  line-height: 1.375rem;

  @media(max-width: 768px) {
    line-height: 1.25rem;
  }
`

export default class Copy extends React.Component {
  render() {
    return (
      <StyledCopy>
        { this.props.children }
      </StyledCopy>
    );
  }
}
