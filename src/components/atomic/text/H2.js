import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledH2 = styled.h2`
  font-size: 2.25rem;
  line-height: 2.5rem;

  //-------------------------------------------------------------
  // Medium devices: tablets
  //-------------------------------------------------------------
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 2rem;
    line-height: 2rem;
  }

  //-------------------------------------------------------------
  // Small devices: phones
  //-------------------------------------------------------------
  @media only screen and (max-width: 600px) {
    font-size: 1.625rem;
    line-height: 2rem;
  }
`

export default function H2(props) {
  return (
    <StyledH2>
      { props.children }
    </StyledH2>
  );
}

H2.propTypes = {
  centered: PropTypes.bool,
  rightAligned: PropTypes.bool
}

