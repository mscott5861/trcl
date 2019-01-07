import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const StImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default function Image(props) {
  return (
    <StImage
      src={props.src}/>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
}
