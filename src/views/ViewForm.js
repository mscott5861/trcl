import React from 'react'
import styled from 'styled-components'
import { Copy, Input, H3, MainContent, TwoColumnLayout } from 'components'
import { generateLoremIpsum } from 'utilities'

const FormWrapper = styled.div`
  padding-top: 2rem;
  width: 50%;
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
      <MainContent>
        <FormWrapper>
          <Copy>
            { generateLoremIpsum() }
          </Copy>
          <H3
            withUnderline>
            Achtung! 
          </H3>
          <TopPadding/>
          <TwoColumnLayout>
            <Input
              label='First Name'/>
            <Input
              label='Last Name'/>
          </TwoColumnLayout>
          <Input
            label='Address'/>
          <Input
            label='City, State, Zip'/>
        </FormWrapper>
      </MainContent>
    );
  }
}
