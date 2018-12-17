import React from 'react'
import { CodeBlock, Copy, H1, H3, Leaflet, TwoColumnLayout } from '../components'
import { generateLoremIpsum } from '../utilities'



export default function ViewLeaflet(props) {
    return (
    <React.Fragment>
      <H1
        rightAligned>
        Leaflet
      </H1>
      <Copy>
        An [optionally] dismissible container for self-contained content. Available with or without titlebars.
      </Copy>
      <H3>
        Props
      </H3>
      <TwoColumnLayout
        columns='1fr .3fr'>
        <Leaflet
          dismissable
          title='Lorem Ipsum'
          columnCount={3}
          columnGap='1rem'>
          <Copy>
            { generateLoremIpsum() }
          </Copy>
        </Leaflet>
        <CodeBlock>
          {
`<Leaflet
dismissable
title='Lorem Ipsum'
columnCount={3}
columnGap='1rem'>`
          }
        </CodeBlock>
      </TwoColumnLayout>
  </React.Fragment> );
}
