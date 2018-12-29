import React from 'react'
import styled from 'styled-components'



const StyledEightPtGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: -1;

  svg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`

export default class EightPtGrid extends React.Component {
  render() {
    return (
      <StyledEightPtGrid>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="subGrid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 L 0 8" fill="none" stroke="gray" strokeWidth="0.5"/>
            </pattern>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect width="80" height="80" fill="url(#subGrid)"/>
              <path d="M 80 0 L 0 0 L 0 80" fill="none" stroke="gray" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>  
      </StyledEightPtGrid>
    );
  }
}
