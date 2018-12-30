import React from 'react'
import styled from 'styled-components'
import { Copy, HeroImage, MainContent, ThreeColumnLayout } from '../components'
import { generateLoremIpsum } from '../utilities'

const StPageWrapper = styled.div`
  display: block;
`

export default class ViewSampleStretched3C extends React.Component {
  render() {
    return (
      <StPageWrapper>
        <HeroImage
          src={'./img/sample-hero-image.jpg'}
          header='A Header'
          subheader='Followed By a Subheader'
          headerColor='#03174A'>
        </HeroImage>
        <MainContent>
          <Copy
            columns={3}>
            { generateLoremIpsum(1) }
          </Copy>
        </MainContent>
      </StPageWrapper>
    );
  }
}
