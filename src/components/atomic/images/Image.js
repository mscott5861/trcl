import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const StImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: ${props => props.clipPath ? props.clipPath : 'initial'};
  max-height: ${props => props.maxHeight ? props.maxHeight : 'initial'};

  @media(max-width: 1024px) {
    clip-path: initial;
  }
`

export default function Image(props) {
  return (
    <StImage
      clipPath={props.clipPath}
      maxHeight={props.maxHeight}
      src={props.src}/>
  );
}

Image.propTypes = {
  clipPath: PropTypes.string,
  maxHeight: PropTypes.string,
  src: PropTypes.string.isRequired,
}
