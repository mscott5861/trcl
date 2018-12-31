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
  top: ${props => props.headerTop ? props.headerTop : '25%'};
  left: ${props => props.headerLeft ? props.headerLeft : '4rem'};

  & > h1,
  & > h3 {
    text-align: ${props => props.headerTextAlign ? props.headerTextAlign : 'left'};
  }
`



export default function HeroBanner(props) {
  return (
    <StBannerWrapper>
      <StHeroImage
        src={props.src}/>
      <StHeaderWrapper
        headerTop={props.headerTop}
        headerLeft={props.headerLeft}
        headerTextAlign={props.headerTextAlign}>
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
