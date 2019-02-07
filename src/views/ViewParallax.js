import React from 'react'
import styled from 'styled-components'
import { Copy, Image, PaddedContent } from 'components'
import { withParallax } from 'hoc'
import { generateLoremIpsum } from 'utilities'

const ParallaxedImage = withParallax(Image, 4);

export default class ViewParallax extends React.Component {
  render() {
    return (
      <PaddedContent>
        <Copy
          fontSize='18rem'>
          { generateLoremIpsum() }
        </Copy>

        <ParallaxedImage
          src={'./img/sample-img-03.jpg'}/>
      </PaddedContent>
    );
  }
}
