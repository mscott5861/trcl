import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


/*---------------------------------------------------------------
 *  A component for displaying code. Uses Google's code-prettify
 *  for syntax highlighting. Currently limited in functionality.
 *--------------------------------------------------------------- */
 
const StCodeBlock = styled.pre`
  display: flex;
  align-items: center;
  color: #393318;
  background-color: #eff0f1;
  padding: 2rem;
  margin: 0;
  height: max-content;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  word-wrap: break-word;

  code {
    display: block;
  }
`

export default class CodeBlock extends React.Component {
  render() {
    return (
      <StCodeBlock>
        <code className='prettyprint'>
          { this.props.children }
        </code>
      </StCodeBlock>
    )
  };
}

CodeBlock.propTypes = {
  children: PropTypes.node.isRequired,
}
