import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  font-size: 3em;
  font-size: calc(32px + ((24 * (100vw-800px))/799));
  line-height: 1.05rem;
  text-align: ${props => props.rightAligned ? 'right' : 'left'};
  margin-bottom: 3rem;

  //-------------------------------------------------------------
  // Medium devices: tablets
  //-------------------------------------------------------------
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 2.5rem;
    line-height: 1.125rem;
  }

  //-------------------------------------------------------------
  // Small devices: phones
  //-------------------------------------------------------------
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
    line-height: 1.25rem;
  }
`

export default function H1(props) {
  return (
    <StyledH1
      rightAligned={props.rightAligned}>
      { props.children }
    </StyledH1>
  );
}

H1.propTypes = {
  centered: PropTypes.bool,
  rightAligned: PropTypes.bool
}

