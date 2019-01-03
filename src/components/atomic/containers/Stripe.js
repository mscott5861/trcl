import React from 'react'
import styled from 'styled-components'

const StStripe = styled.div`
  padding: 2rem 3rem;
  background-color: ${props => props.bgColor ? props.bgColor : '#d2d2d2'};
  width: 100%;

  @meda(max-width: 768px) {
    padding: 1rem 2rem;
  }
`

export default function Stripe(props) {
  return (
    <StStripe
      bgColor={props.bgColor}>
      { props.children }
    </StStripe>
  );
}

