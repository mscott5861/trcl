import React from 'react'
import styled from 'styled-components'
import { Button, Copy, Form, Image, Input, H1, MainContent, Stripe, ThreeColumnLayout, TwoColumnLayout } from 'components'
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

const Column35Rem = styled.div`
  width: 35rem;
`

const TopPadding = styled.div`
  height: .75rem;
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
        columns='0.5fr 1fr'
        matchViewportHeight>
        <FormWrapper>
          <ContentWrapper>
            <H1>
              A Header
            </H1>
            <TopPadding/>
            <Column35Rem>
              <Form>
                <Input
                  inputID='username'
                  label='Username'/>
                <PasswordInput
                  inputID='password'
                  label='Password'/>
                <Button
                  bgColor='#5D2E5C'
                  label='Login'/>
              </Form>
            </Column35Rem>
          </ContentWrapper>
        </FormWrapper>
        <Image
          clipPath='polygon(0 0, 100% 0, 100% 100%, 20% 100%)'
          src={'./img/sample-img-02.jpg'}/>
      </TwoColumnLayout>
    );
  }
}
