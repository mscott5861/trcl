import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { H1, H3 } from '../../../components'


// Really, this component should re-think its idea of the header/
// subheader props. A user might want anything displayed atop the
// HeroBanner component. 


/*---------------------------------------------------------------
 *  A hero banner functional component; provides a full-width 
 *  image that uses object-fit: cover (so its image stretches to 
 *  fill the container's aspect ratio, then crops as needed to 
 *  maintain its own) and contains an optional header/subheader. 
 *  Accepts a variety of props to manipulate the header/subheader 
 *  text, as well as a manadatory src prop (a url pointing to the 
 *  image used in the banner).
 *  ------------------------------------------------------------- */
 
const StHeroImage = styled.img`
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
`

const StHeroHeader = styled(H1)`
  font-size: ${props => props.fontSize ? props.fontSize : '7rem'};
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
  left: ${props => props.headerLeft ? props.headerLeft : 'unset'};
  right: ${props => props.headerRight ? props.headerRight : 'unset'};

  & > h1,
  & > h3 {
    text-align: ${props => props.headerTextAlign ? props.headerTextAlign : 'left'};
    font-family: ${props => props.fontFamily ? props.fontFamily : 'serif'};
  }

  @media(max-width: 1024px) {
    padding: 1rem;
    background: rgba(255, 255, 255, 0.5);
  }
`


export default function HeroBanner(props) {
  return (
    <StBannerWrapper>
      <StHeroImage
        src={props.src}/>
      <StHeaderWrapper
        fontFamily={props.headerFontFamily}
        headerTop={props.headerTop}
        headerLeft={props.headerLeft}
        headerRight={props.headerRight}
        headerTextAlign={props.headerTextAlign}>
        <StHeroHeader
          color={props.headerColor}
          fontSize={props.headerFontSize}>
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

HeroBanner.propTypes = {
  header: PropTypes.string,
  headerColor: PropTypes.string,
  headerFontFamily: PropTypes.string,
  headerFontSize: PropTypes.string,
  headerLeft: PropTypes.string,
  headerRight: PropTypes.string,
  headerTextAlign: PropTypes.string,
  headerTop: PropTypes.string,
  src: PropTypes.string.isRequired,
  subheader: PropTypes.string,
}

 
