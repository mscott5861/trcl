import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  font-size: ${props => props.fontSize ? props.fontSize : '3rem'};
  line-height: 1.05rem;
  text-align: ${props => props.rightAligned ? 'right' : 'left'};
  color: ${props=> props.color ? props.color : '#000'};
  margin-bottom: 4rem;

  //-------------------------------------------------------------
  // Medium devices: tablets
  //-------------------------------------------------------------
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 2.5rem;
    line-height: 1.25rem;
    margin-bottom: 2rem;
  }

  //-------------------------------------------------------------
  // Small devices: phones
  //-------------------------------------------------------------
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`

export default function H1(props) {
  return (
    <StyledH1
      centered={props.centered}
      color={props.color}
      fontSize={props.fontSize}
      rightAligned={props.rightAligned}>
      { props.children }
    </StyledH1>
  );
}

H1.propTypes = {
  centered: PropTypes.bool,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  rightAligned: PropTypes.bool
}

