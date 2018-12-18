import React from 'react'
import styled from 'styled-components'
import { Table } from '../../../components'

export default class PropsTable extends React.Component {
  render() {
    return (
      <Table>
        <tr>
          <th align='left'>Property</th>
          <th align='left'>Required</th>
          <th align='left'>Type</th>
          <th align='left'>Description</th>
          <th align='left'>Default</th>
        </tr>
        { this.props.props.map((prop, idx) => {
            return(
              <tr key={'props-table-' + idx}>
                <td>
                  {prop.property}
                </td>
                <td>
                  {prop.required}
                </td>
                <td>
                  {prop.type}
                </td>
                <td>
                  {prop.description}
                </td>
                <td>
                  {prop.default}
                </td>
              </tr>
            );
        })}
      </Table>
    );
  }
}
