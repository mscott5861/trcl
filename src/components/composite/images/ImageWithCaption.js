import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StImageWithCaption = styled.img`
  object-fit: cover;
  width: 100%;
`

const StCaption = styled.p`
  font-size: 0.75rem; 
  font-style: italic;
  text-align: ${props => props.centeredHorizontally ? 'center' : (props.rightAligned ? 'right' : 'left')};
  line-height: 2rem;
`

const StWrapper = styled.div`
  display: block;
`

export default function ImageWithCaption(props) {
  return (
    <StWrapper>
      <StImageWithCaption
        src={props.src}/>
      <StCaption
        centeredHorizontally={props.centeredHorizontally}
        rightAligned={props.rightAligned}>
        {props.children}
      </StCaption>
    </StWrapper>
  );
}


ImageWithCaption.propTypes = {
  centeredHorizontally: PropTypes.bool,
  children: PropTypes.node.isRequired,
  rightAligned: PropTypes.bool,
  src: PropTypes.string.isRequired,
  weight: PropTypes.oneOf(['extraLight', 'light', 'medium', 'regular', 'semiBold', 'bold', 'ultraBold']),
}
