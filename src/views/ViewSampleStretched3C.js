import React from 'react'
import styled from 'styled-components'
import { Copy, HeroBanner, ImageWithCaption, MainContent, Navbar, TwoColumnLayout } from '../components'
import { generateLoremIpsum } from '../utilities'

const StPageWrapper = styled.div`
  display: block;
`

export default class ViewSampleStretched3C extends React.Component {
  render() {
    return (
      <StPageWrapper>
        <Navbar
          bgColor='#03174A'
          sticky>
          Some navbar stuff
        </Navbar>
        <HeroBanner
          header='A Header'
          headerColor='#03174A'
          headerFontSize='7rem'
          headerLeft='5rem'
          headerTextAlign='left'
          headerTop='40%'
          src={'./img/sample-hero-image.jpg'}
          subheader='Followed By a Subheader'/>
        <MainContent>
          <Copy
            columns={3}>
            { generateLoremIpsum(1) }
          </Copy>
          <TwoColumnLayout>
            <ImageWithCaption
              src={'./img/sample-img-01.jpg'}
              centeredHorizontally>
              Fig 1.1: A caption that really explains some things.
            </ImageWithCaption>
            <Copy
              stylizeFirstLetter>
              { generateLoremIpsum() }
            </Copy>
          </TwoColumnLayout>
        </MainContent>
      </StPageWrapper>
    );
  }
}
