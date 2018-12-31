import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StLink = styled.a`

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

