import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledH3 = styled.h1`
  font-size: 1.75rem;
  line-height: 1.25rem;

  //-------------------------------------------------------------
  // Medium devices: tablets
  //-------------------------------------------------------------
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 1.5rem;
  }

  //-------------------------------------------------------------
  // Small devices: phones
  //-------------------------------------------------------------
  @media only screen and (max-width: 600px) {
    font-size: 1.375rem;
    line-height: 1.13636364rem;
  }
`

export default function H3(props) {
  return (
    <StyledH3>
      { props.children }
    </StyledH3>
  );
}

H3.propTypes = {
  centered: PropTypes.bool,
  rightAligned: PropTypes.bool
}


