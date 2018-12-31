import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StH2 = styled.h2`
  font-size: ${props => props.fontSize ? props.fontSize : '2.25rem'};
  line-height: ${props => props.fontSize ? 'calc(' + props.fontSize + ' + 1rem)' : '3.25rem'};
  line-height: 2.5rem;
  color: ${props=> props.color ? props.color : '#000'};

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
    <StH2
      centered={props.centered}
      color={props.color}
      fontSize={props.fontSize}
      rightAligned={props.rightAligned}>
      { props.children }
    </StH2>
  );
}

H2.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.fontSize,
  rightAligned: PropTypes.bool
}

