import React from 'react'
import styled from 'styled-components'
import { Button, Form, HamburgerButton, Image, Input, H1, TwoColumnLayout } from 'components'
import { withMask, withValidation } from 'hoc'

const ValidatedInput = withValidation(Input, '*');
//const ValidatedInput = withValidation(MaskedInput, '/%a'); 

const FormWrapper = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const ContentWrapper = styled.div`
  display: block;
  padding-left: 3rem;
`

const Column = styled.div`
  width: 24rem;
`

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`
export default class ViewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onHamburgerButtonClick = () => {
  }

  render() {
    return (
      <React.Fragment>
      <HamburgerButton
        buttonColorClicked='#333'
        buttonColorUnclicked='#333'
        fixed='top-left'
        onHamburgerButtonClick={this.onHamburgerButtonClick}/>
      <TwoColumnLayout
        columns='0.5fr 1fr'
        matchViewportHeight>
        <FormWrapper>
          <ContentWrapper>
            <H1>
              A Header
            </H1>
            <Column>
              <Form>
                <Input
                  inputID='username'
                  label='Username'/>
                <ValidatedInput
                  inputID='password'
                  label='Password'/>
                <Button
                  bgColor='#A1297B'
                  label='Login'/>
              </Form>
            </Column>
          </ContentWrapper>
        </FormWrapper>
        <Wrapper>
          <Image
            clipPath='polygon(0 0, 100% 0, 100% 100%, 20% 100%)'
            maxHeight='100vh'
            src={'./img/sample-img-06.jpg'}/>
        </Wrapper>
      </TwoColumnLayout>
      </React.Fragment>
    );
  }
}
