import React from 'react'
import styled from 'styled-components'
import { Button, Copy, Image, Input, H1, MainContent, Stripe, ThreeColumnLayout, TwoColumnLayout } from 'components'
import { generateLoremIpsum } from 'utilities'
import { withMask } from 'hoc'

const PasswordInput = withMask(Input, '*');

const FormWrapper = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const ContentWrapper = styled.div`
  display: block;
`

const Form = styled.div`
  width: 35rem;
`

const TopPadding = styled.div`
  height: 1.75rem;
  width: 100%;
`

export default class ViewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <TwoColumnLayout
        matchViewportHeight>
        <FormWrapper>
          <ContentWrapper>
            <H1>
              A Header
            </H1>
            <TopPadding/>
            <Form>
              <Input
                label='Username'/>
              <PasswordInput
                label='Password'/>
              <Button
                label='Login'/>
            </Form>
          </ContentWrapper>
        </FormWrapper>
        <Image
          src={'./img/sample-hero-banner-03.jpg'}/>
      </TwoColumnLayout>
    );
  }
}
