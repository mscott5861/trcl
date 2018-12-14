import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table` 
  border-collapse: collapse;
  font-family: Arial;
  font-size: .75rem;

  td {
    word-wrap: break-word;
    padding: .5em 1em;
  }

  th {
    padding: .5em 1em;
  }

  tr:nth-child(even) {
    background-color: #eff0f1;
  }
`

export default class Table extends React.Component {
  render() {
    return (
      <StyledTable>
        { this.props.children }
      </StyledTable>
    );
  }
}

