import React from 'react'
import styled from 'styled-components'
import { Image } from 'components'
import { withParallax } from 'hoc'

const MaskedInput = withMask(Input, '*');
const ValidatedInput = withValidation(Input, requiredSchema);

export default class ViewParallax extends React.Component {
  render() {
    return (
    );
  }
}
