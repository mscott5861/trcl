import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


/*---------------------------------------------------------------
 *  A component for displaying code. Uses Google's code-prettify
 *  for syntax highlighting. Currently limited in functionality.
 *--------------------------------------------------------------- */
 
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

CodeBlock.propTypes = {
  children: PropTypes.node.isRequired,
}
