import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  font-size: ${props => props.fontSize ? props.fontSize : '3rem'};
  line-height: ${props => props.fontSize ? 'calc(' + props.fontSize + ' + 1rem)' : '4rem'};
  text-align: ${props => props.rightAligned ? 'right' : 'left'};
  color: ${props=> props.color ? props.color : '#000'};
  margin: 0;

  //-------------------------------------------------------------
  // Medium devices: tablets
  //-------------------------------------------------------------
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 2.5rem;
    line-height: 3.5rem;
  }

  //-------------------------------------------------------------
  // Small devices: phones
  //-------------------------------------------------------------
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
    line-height: 3rem;
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

