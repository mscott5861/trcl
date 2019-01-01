import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


/*---------------------------------------------------------------
 * A functional component for textual/image-based hyperlinks.
 *--------------------------------------------------------------- */

const StLink = styled.a`
  text-decoration: none;
`

export default function Link(props) {
  return (
    <StLink>
      { props.children }
    </StLink>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
}

