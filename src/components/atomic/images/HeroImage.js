import React from 'react'
import styled from 'styled-components'
import { H1, H3 } from '../../../components'

const StHeroImage = styled.img`
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
`

const StHeroHeader = styled(H1)`
  color: ${props => props.color ? props.color : '#fff'};
  margin: 0;
`

const StHeroSubheader = styled(H3)`
  font-size: 3rem;
  color: ${props => props.color ? props.color : '#fff'};
  margin: 0;
`


const StBannerWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
`

const StHeaderWrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 4rem;
`



export default function HeroImage(props) {
  return (
    <StBannerWrapper>
      <StHeroImage
        src={props.src}/>
      <StHeaderWrapper>
        <StHeroHeader
          color={props.headerColor}
          fontSize='7rem'>
          { props.header }
        </StHeroHeader>
        <StHeroSubheader
          color={props.headerColor}>
          { props.subheader }
        </StHeroSubheader>
      </StHeaderWrapper>
    </StBannerWrapper>
  );
}
