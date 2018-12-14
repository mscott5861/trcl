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
  font-weight: ${props => props.extraLight ? '200' :
                          props.light ? '300' :
                          props.medium ? '500' :
                          props.semiBold ? '600' : 
                          props.bold ? '800' : 
                          props.ultraBold ? '900' : '400' };

  line-height: 1.375rem;
  letter-spacing: ${props => props.tracking ? props.tracking : 'initial'};
  text-align:  ${props => props.justified ? 'justify' :
                          props.rightAligned ? 'right' :
                          props.centered ? 'center' : 'left'};
  max-width: ${props => props.optimizeLength ? '66ch' : 'initial'};
  margin-bottom: 2rem;
  
  @media(max-width: 768px) {
    line-height: 1.25rem;
    max-width: ${props => props.optimizeLength ? '30ch' : 'initial'};
  }
`

export default class Copy extends React.Component {
  render() {
    return (
      <StyledCopy
        extraLight={this.props.extraLight}
        light={this.props.light}
        medium={this.props.medium}
        semiBold={this.props.semiBold}
        bold={this.props.bold}
        ultraBold={this.props.ultraBold}
        centered={this.props.centered}
        rightAligned={this.props.rightAligned}
        justified={this.props.justified}
        tracking={this.props.tracking}
        optimizeLength={this.props.optimizeLength}>
        { this.props.children }
      </StyledCopy>
    );
  }
}

Copy.propTypes = {
  extraLight: PropTypes.bool,
  light: PropTypes.bool,
  medium: PropTypes.bool,
  semiBold: PropTypes.bool,
  bold: PropTypes.bool,
  ultraBold: PropTypes.bool,
  centered: PropTypes.bool,
  rightAligned: PropTypes.bool,
  justified: PropTypes.bool,
  tracking: PropTypes.string,
  optimizeLength: PropTypes.bool,
}

