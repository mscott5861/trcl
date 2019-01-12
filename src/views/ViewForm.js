import React from 'react'
import styled from 'styled-components'
import { Button, Copy, Form, FormController, Input, PaddedContent, ThreeColumnLayout, TwoColumnLayout } from 'components'
import { withMask, withValidation } from 'hoc'
import { requiredSchema } from 'utilities'

const MaskedInput = withMask(Input, '*');
const ValidatedInput = withValidation(Input, requiredSchema);

export default class ViewForm extends React.Component {
  constructor() {
    super();
    this.formRef = React.createRef();
  }

  onSubmit = () => {
  }

  render() {
    return (
     <PaddedContent>
        <Form
          ref={this.formRef}
          onSubmit={this.onSubmit}>
          <TwoColumnLayout>
            <ValidatedInput
              inputID='firstname'
              label='First Name'
              activeLabel='First Name'
              required/>
            <ValidatedInput
              inputID='lastname'
              label='Last Name'
              activeLabel='Last Name'
              required/>
          </TwoColumnLayout>
          <MaskedInput
            inputID='ssn'
            label='SSN'
            activeLabel='SSN'
            required/>
          <Button
            bgColor='#A1297B'
            label='Login'
            onClick={this.onSubmit}/>
        </Form>
      </PaddedContent>
    );
  }
}
