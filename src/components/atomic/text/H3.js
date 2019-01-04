import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StH3 = styled.h3`
  font-size: ${props => props.fontSize ? props.fontSize : '1.75rem'};
  line-height: ${props => props.fontSize ? 'calc(' + props.fontSize + ' + 1rem)' : '2.75rem'};
  color: ${props=> props.textColor ? props.textColor : '#333'};
  margin: 0;

  //-------------------------------------------------------------
  // Medium devices: tablets
  //-------------------------------------------------------------
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 1.5rem;
    line-height: 3.5rem;
  }

  //-------------------------------------------------------------
  // Small devices: phones
  //-------------------------------------------------------------
  @media only screen and (max-width: 600px) {
    font-size: 1.375rem;
    line-height: 1.5rem;
  }
`

export default function H3(props) {
  return (
    <StH3
      centered={props.centered}
      fontSize={props.fontSize}
      rightAligned={props.rightAligned}
      textColor={props.textColor}>
      { props.children }
    </StH3>
  );
}

H3.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  rightAligned: PropTypes.bool,
  textColor: PropTypes.string,
}


