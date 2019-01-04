import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StH1 = styled.h1`
  font-size: ${props => props.fontSize ? props.fontSize : '3rem'};
  line-height: ${props => props.fontSize ? 'calc(' + props.fontSize + ' + .5rem)' : '4rem'};
  text-align: ${props => props.rightAligned ? 'right' : 'left'};
  color: ${props=> props.textColor ? props.textColor : '#333'};
  margin: 0;
  margin-bottom: ${props => props.withUnderline ? '1.5rem' : '0'};
  border-bottom: ${props => props.withUnderline ? "1px solid " + (props.textColor ? props.textColor : '#333') : 'none'};

  //-------------------------------------------------------------
  // Medium devices: tablets
  //-------------------------------------------------------------
  @media only screen and (min-width: 600px) and (max-width: 992px) {
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
    <StH1
      centered={props.centered}
      fontSize={props.fontSize}
      rightAligned={props.rightAligned}
      textColor={props.textColor}
      withUnderline={props.withUnderline}>
      { props.children }
    </StH1>
  );
}

H1.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  rightAligned: PropTypes.bool,
  textColor: PropTypes.string,
  withUnderline: PropTypes.bool,
}

