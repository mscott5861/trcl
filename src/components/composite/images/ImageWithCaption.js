import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StImageWithCaption = styled.img`
  object-fit: cover;
  width: 100%;
`

const StCaption = styled.p`
  font-size: 0.75rem; 
`

const StWrapper = styled.div`
  display: block;
`

export default function ImageWithCaption(props) {
  return (
    <StWrapper>
      <StImageWithCaption
        src={props.src}/>
      <StCaption>
        {props.children}
      </StCaption>
    </StWrapper>
  );
}


ImageWithCaption.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
}
