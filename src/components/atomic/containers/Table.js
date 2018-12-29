import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table` 
  border-collapse: collapse;
  font-size: .75rem;

  td, th {
    word-wrap: break-word;
    padding: .75em 1em;
  }

  tr:nth-child(even) {
    background-color: #eff0f1;
  }
`

export default class Table extends React.Component {
  render() {
    return (
      <StyledTable>
        <tbody>
          { this.props.children }
        </tbody>
      </StyledTable>
    );
  }
}

