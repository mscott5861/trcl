import React from 'react'
import styled from 'styled-components'

const StyledCodeBlock = styled.pre`
  display: flex;
  align-items: center;
  color: #393318;
  background-color: #eff0f1;
  padding: 2rem;
  margin: 0;
  height: max-content;

  code {
    display: block;
  }
`

export default class CodeBlock extends React.Component {
  render() {
    return (
      <StyledCodeBlock>
        <code className='prettyprint'>
          { this.props.children }
        </code>
      </StyledCodeBlock>
    )
  };
}
