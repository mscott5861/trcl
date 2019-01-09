import React from 'react'
import styled from 'styled-components'
import { Button, CodeBlock, Form, Image, Input, H1, PaddedContent, TwoColumnLayout } from 'components'
import { withMask, withValidation } from 'hoc'
import { atLeastFiveSchema } from 'utilities'


/*---------------------------------------------------------------
 *  A sample responsive login view that demonstrates composition
 *  of complex Input components by wrapping in multiple HOCs.
 * -------------------------------------------------------------- */

const ValidatedMaskedInput = withValidation(withMask(Input, '*'), atLeastFiveSchema);

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

  @media(max-width: 1024px) {
    padding-left: 0;
    width: 100%;
  }
`
const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`
export default class ViewLogin extends React.Component {
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
                <Form
                  onSubmit={this.onSubmit}>
                  <Input
                    inputID='username'
                    label='Username'
                    activeLabel='Standard <Input/> Component'
                    required/>
                  <ValidatedMaskedInput
                    inputID='password'
                    label='Password'
                    activeLabel='<Input/> wrapped in withMask() and withValidation() HOCs'
                    required/>
                  <Button
                    bgColor='#A1297B'
                    label='Login'
                    onClick={this.props.onSubmit}/>
                </Form>
            </ContentWrapper>
          </FormWrapper>
          <Wrapper>
            <Image
              clipPath='polygon(0 0, 100% 0, 100% 100%, 20% 100%)'
              maxHeight='100vh'
              src={'./img/sample-img-06.jpg'}/>
          </Wrapper>
        </TwoColumnLayout>
        <PaddedContent>
          <CodeBlock>
          {
`
import React from 'react'
import styled from 'styled-components'
import { Button, Form, Image, Input, H1, TwoColumnLayout } from 'components'
import { withMask, withValidation } from 'hoc'
import { atLeastFiveSchema } from 'utilities'


/*---------------------------------------------------------------
 *  A sample responsive login view that demonstrates composition
 *  of complex Input components by wrapping in multiple HOCs.
 * -------------------------------------------------------------- */

const ValidatedMaskedInput = withValidation(withMask(Input, '*'), atLeastFiveSchema);

const FormWrapper = styled.div\`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
\`

const ContentWrapper = styled.div\`
  display: block;
  padding-left: 3rem;

  @media(max-width: 1024px) {
    padding-left: 0;
    width: 100%;
  }
\`

const Wrapper = styled.div\`
  position: relative;
  height: 100%;
  width: 100%;
\`

export default class ViewLogin extends React.Component {
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
              <Form
                onSubmit={this.onSubmit}>
                <Input
                  inputID='username'
                  label='Username'
                  required/>
                <ValidatedMaskedInput
                  inputID='password'
                  label='Password'
                  required/>
                <Button
                  bgColor='#A1297B'
                  label='Login'
                  onClick={this.props.onSubmit}/>
              </Form>
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
`}
          </CodeBlock>
        </PaddedContent>
      </React.Fragment>
    );
  }
}
