import React from 'react'
import styled from 'styled-components'
import { Button, Form, Image, Input, H1, TwoColumnLayout } from 'components'
import { withMask, withValidation } from 'hoc'



/*---------------------------------------------------------------
 *  A sample responsive login view that demonstrates composition
 *  of complex Input components by wrapping in multiple HOCs.
 * -------------------------------------------------------------- */

const passwordSchema = {
  schema: "(.*[a-zA-Z0-9]){3}",
  errorMessage: "Passwords need to be at least 3 alphanumeric characters."
},
  ValidatedMaskedInput = withValidation(withMask(Input, '*'), passwordSchema);

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
export default class ViewLogin extends React.Component {
  onSubmit = (form) => {
    
  }

  render() {
    return (
      <React.Fragment>
        <TwoColumnLayout
          columns='0.5fr 1fr'
          matchViewportHeight>
          <FormWrapper>
            <ContentWrapper>
              <H1
                fontSize='6rem'>
                A Header
              </H1>
              <Column>
                <Form
                  onSubmit={this.onSubmit}>
                  <Input
                    inputID='username'
                    label='Username'/>
                  <ValidatedMaskedInput
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
