import React from 'react'
import styled from 'styled-components'
import { Copy, H1, Leaflet } from '../components'
import { generateLoremIpsum } from '../utilities'


export default class ViewLeaflet extends React.Component {
  render() {
    return (
      <div>
        <H1
          rightAligned>
          Leaflet
        </H1>
        <Copy
          optimizedLength>
          An [optionally] dismissible container for self-contained content. 
        </Copy>
          
        <Leaflet
          dismissable
          title='Lorem Ipsum'
          columnCount={3}
          columnGap='1rem'>
          <Copy>
            { generateLoremIpsum(2) }
          </Copy>
        </Leaflet>
    </div> );
  }
}
