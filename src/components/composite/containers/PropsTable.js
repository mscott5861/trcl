import React from 'react'
import styled from 'styled-components'
import { Table } from '../../../components'

export default class PropsTable extends React.Component {
  render() {
    return (
      <Table>
        <tr>
          <th align="left">Property</th>
          <th>Required</th>
          <th>Type</th>
          <th>Description</th>
          <th>Default</th>
        </tr>
        { this.props.props.map((prop, idx) => {
            return(
              <tr>
                <td>
                  {prop.property}
                </td>
                <td>
                  {prop.required}
                </td>
                <td style={{textAlign: 'center'}}>
                  {prop.type}
                </td>
                <td style={{textAlign: 'center'}}>
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
