import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/*---------------------------------------------------------------
 *  A component for copy text that incorporates best practices,
 *  such as optimal length (66 characters for desktop, according 
 *  to Bringhurst, and roughly half that for mobile), responsive
 *  line-height, etc.
 * -------------------------------------------------------------- */

const StyledCopy = styled.p`
  font-size: 1rem;
  line-height: 1.375rem;
  text-align:  ${props => props.justified ? 'justify' :
                          props.rightAligned ? 'right' :
                          props.centered ? 'center' : 'unset'};
  max-width: ${props => props.optimizedLength ? '36em' : 'unset'};
  
  @media(max-width: 768px) {
    line-height: 1.25rem;
    max-width: ${props => props.optimizedLength ? '17em' : 'unset'};
  }
`

export default class Copy extends React.Component {
  render() {
    return (
      <StyledCopy
        justified={this.props.justified}
        centered={this.props.centered}
        rightAligned={this.props.rightAligned}
        optimizedLength={this.props.optimizedLength}>
        { this.props.children }
      </StyledCopy>
    );
  }
}

Copy.propTypes = {
  centered: PropTypes.bool,
  justified: PropTypes.bool,
  rightAligned: PropTypes.bool,
  optimizedLength: PropTypes.boolean,
}
