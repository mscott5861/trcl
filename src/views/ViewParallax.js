import React from 'react'
import styled from 'styled-components'
import { Copy, Image, PaddedContent } from 'components'
import { withParallax } from 'hoc'
import { generateLoremIpsum } from 'utilities'

const ParallaxedImage = withParallax(Image, 6);
const StContainer = styled.div`
  position: absolute;
  padding: 2rem;
  z-index: 10;
`

const StLandscapeContainer = styled.div`
  width: 400vw;
  padding: 3rem;
`

export default class ViewParallax extends React.Component {
  render() {
    return (
      <PaddedContent>
        <StContainer>
          <Copy
            fontSize='4rem'
            textColor='#333'>
            { generateLoremIpsum() }
          </Copy>
        </StContainer>
        <ParallaxedImage
          src={'./img/sample-img-04.jpg'}/>
      </PaddedContent>
    );
  }
}
