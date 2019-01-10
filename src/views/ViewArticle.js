import React from 'react'
import styled from 'styled-components'
import { CodeBlock, Copy, H1, HamburgerButton, HeroBanner, ImageWithCaption, List, ListItem, Navbar, NavigationDrawer, PaddedContent, Stripe, TwoColumnLayout } from 'components'
import { generateLoremIpsum } from 'utilities'


const StPageWrapper = styled.div`
  display: block;
`

export default class ViewArticle extends React.Component {
  constructor() {
    super();
    this.state = {
      hamburgerClicked: false
    }
  }

  render() {
    return (
      <StPageWrapper>
        <NavigationDrawer
          hasRightBorder
          isOpen={this.state.hamburgerClicked}
          bgColor='#232321'
          shouldClearNavbar={true}>
          <List
            listItemHeight='5rem'
            listItemPrimaryTextColor='#FFF'
            listItemSecondaryTextColor='#C4C631'>
            <ListItem
              imageSrc='./icon/square-icon-01.jpg'
              primaryText='Forms'
              secondaryText='Statically and dynamically generated'/>
            <ListItem
              imageSrc='./icon/square-icon-02.jpg'
              primaryText='Copy'
              secondaryText='Text, containers, and white space'/>
          </List>
        </NavigationDrawer>
        <Navbar
          bgColor='#AC370D'
          sticky
          groupRight={
            <div>
              <span>A Sticky Navbar</span>
            </div>
          }
          groupLeft={
            <HamburgerButton
              onHamburgerButtonClick={() => {
                this.setState({
                  hamburgerClicked: !this.state.hamburgerClicked
                });}}>
            </HamburgerButton>
          }>
        </Navbar>
        <HeroBanner
          header='HeroBanner'
          headerColor='#'
          headerFontSize='5rem'
          headerLeft='2rem'
          headerTextAlign='right'
          headerTop='40%'
          src={'./img/sample-hero-banner-04.jpg'}
          subheader='With Header & Subheader Props'/>
        <PaddedContent>
          <Copy
            columns={3}
            stylizeFirstLetter>
            { generateLoremIpsum(3) }
          </Copy>
          <TwoColumnLayout>
            <ImageWithCaption
              src={'./img/sample-hero-banner-03.jpg'}
              centeredHorizontally>
              Fig 1.1: A caption that really explains some things.
            </ImageWithCaption>
            <Copy>
              { generateLoremIpsum(2) }
            </Copy>
          </TwoColumnLayout>
        </PaddedContent>
        <Stripe
          bgColor='#AC370D'>
          <H1
            textColor='#FFF'
            withUnderline>
            Lorem Ipsum
          </H1>
          <Copy
            columns={3}
            textColor='#FFF'>
            { generateLoremIpsum(4) }
          </Copy>
        </Stripe>
        <PaddedContent>
          <CodeBlock>
            {
`
import React from 'react'
import styled from 'styled-components'
import { CodeBlock, Copy, H1, HamburgerButton, HeroBanner, ImageWithCaption, PaddedContent, Navbar, Stripe, TwoColumnLayout } from 'components'
import { generateLoremIpsum } from 'utilities'

const StPageWrapper = styled.div\`
  display: block;
\`

export default class ViewSampleStretched3C extends React.Component {
  constructor() {
    super();
    this.state = {
      hamburgerClicked: false
    }
  }

  render() {
    return (
      <StPageWrapper>
        <Navbar
          bgColor='#AC370D'
          sticky
          groupLeft={
            <HamburgerButton
              onHamburgerButtonClick={() => {
                this.setState({
                  hamburgerClicked: !this.state.hambugerClicked
                });}}>
            </HamburgerButton>
          }
          groupRight={
            <div>
              <span>A Sticky Navbar</span>
            </div>
          }/>
        <HeroBanner
          header='A Header'
          headerColor='#'
          headerFontSize='6rem'
          headerLeft='2rem'
          headerTextAlign='right'
          headerTop='40%'
          src={'./img/sample-hero-banner-04.jpg'}
          subheader='Followed By a Subheader'/>
        <PaddedContent>
          <Copy
            columns={3}
            stylizeFirstLetter>
            { generateLoremIpsum(3) }
          </Copy>
          <TwoColumnLayout>
            <ImageWithCaption
              src={'./img/sample-hero-banner-03.jpg'}
              centeredHorizontally>
              Fig 1.1: A caption that really explains some things.
            </ImageWithCaption>
            <Copy>
              { generateLoremIpsum(2) }
            </Copy>
          </TwoColumnLayout>
        </PaddedContent>
        <Stripe
          bgColor='#AC370D'>
          <H1
            textColor='#FFF'
            withUnderline>
            Lorem Ipsum
          </H1>
          <Copy
            columns={3}
            textColor='#FFF'>
            { generateLoremIpsum(4) }
          </Copy>
        </Stripe>
      </StPageWrapper>
    );
  }
}
`
            }
          </CodeBlock>
        </PaddedContent>
      </StPageWrapper>
    );
  }
}
