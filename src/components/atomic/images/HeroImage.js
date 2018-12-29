import React from 'react'
import styled from' styled-components'

const StyledHeroImage = styled.img`
  width: 100%;
  object-fit: cover;
`

export default function HeroImage(props) {
  return (
    <StyledHeroImage
      src={props.src}/>
  );
}
