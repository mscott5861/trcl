import React from 'react'
import { CodeBlock, Copy, H1, H3, PropsTable, TwoColumnLayout } from '../components'
import { generateLoremIpsum } from '../utilities'



const copyProps = [{
  property: 'weight',
  required: 'no',
  type: "enum: 'extraLight' | 'light' | 'medium' | 'regular' | 'semiBold' | 'ultraBold'",
  description: 'Specifies the weight (or boldness) of the font.',
  default: 'regular'
}, {
  property: 'tracking',
  required: 'no',
  type: 'string',
  description: 'How widely-spaced letters are from one another.',
  default: ''
}, {
  property: 'centeredHorizontally',
  required: 'no',
  type: 'boolean',
  description: 'If set to true, text will be centered horizontally on the screen.',
  default: 'false'
}, {
  property: 'centeredVertically',
  required: 'no',
  type: 'boolean',
  description: 'If set to true, text will be centered vertically on the screen.',
  default: 'false'
}, {
  property: 'rightAligned',
  required: 'no',
  type: 'boolean',
  description: 'If set to true, text will be aligned along the right edge of its container.',
  default: 'false'
}, {
  property: 'justified',
  required: 'no',
  type: 'boolean',
  description: 'If set to true, lines of text will occupy equal width, adjusting word-spacing to acheive this',
  default: 'false'
}, {
   property: 'optimizeLength',
  required: 'no',
  type: 'boolean',
  description: 'Sets the width of lines of text to 66 characters (desktop) or roughly 33 characters (tablet and below); considered the optimal length for readability. Note that only monospace fonts can guarantee character count.',
  default: 'false'
}];

export default function CopyLeaflet(props) {
  return (
    <React.Fragment>
      <H1
        rightAligned>
        Copy
      </H1>
      <Copy>
        A component for copy text that incorporates best practices, such as optimal character length (66 characters for desktop, according to Bringhurst, and roughly half that for mobile), responsive line-height, etc. 
      </Copy>
      <TwoColumnLayout
        columns='.3fr 1fr'>
        <CodeBlock>
        {
`<Copy>
  {'Example \\n text'}
</Copy>`
        }
        </CodeBlock>
        <Copy
          justified
          centeredVertically>
          {'Strings passed to Copy in curly braces and single quotes (or backticks) will break on newline characters, technically generating additional <p> elements to contain the text following them.'}
        </Copy>
      </TwoColumnLayout>
      <H3>
        Props
      </H3>
      <PropsTable
        props={copyProps}/>
  </React.Fragment> );
}
