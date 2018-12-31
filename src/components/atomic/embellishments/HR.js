import React from 'react'
import styled from 'styled-components'

const StHR = styled.div`
  height: 1px;
  background: ${props => props.bgColor ? props.bgColor : '#999'};
  width: 100%;
  margin-bottom: 2rem;
`

export default function HR(props) {
  return (
    <StHR
      bgColor={props.bgColor}/>
  );
}
