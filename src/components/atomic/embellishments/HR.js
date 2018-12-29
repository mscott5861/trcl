import React from 'react'
import styled from 'styled-components'

const StyledHR = styled.div`
  height: 1px;
  background: ${props => props.bgColor ? props.bgColor : '#999'};
  width: 100%;
  margin-bottom: 2rem;
`

export default function HR(props) {
  return (
    <StyledHR
      bgColor={props.bgColor}/>
  );
}
