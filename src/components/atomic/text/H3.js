import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledH3 = styled.h3`
  font-size: ${props => props.fontSize ? props.fontSize : '1.75rem'};
  line-height: 2rem;
  color: ${props=> props.color ? props.color : '#000'};

  //-------------------------------------------------------------
  // Medium devices: tablets
  //-------------------------------------------------------------
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

  //-------------------------------------------------------------
  // Small devices: phones
  //-------------------------------------------------------------
  @media only screen and (max-width: 600px) {
    font-size: 1.375rem;
  }
`

export default function H3(props) {
  return (
    <StyledH3
      centered={props.centered}
      color={props.color}
      fontSize={props.fontSize}
      rightAligned={props.rightAligned}>
      { props.children }
    </StyledH3>
  );
}

H3.propTypes = {
  centered: PropTypes.bool,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  rightAligned: PropTypes.bool
}


