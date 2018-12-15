import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'



/*---------------------------------------------------------------
 *  A component for copy text that incorporates best practices,
 *  such as optimal length (66 characters for desktop, according 
 *  to Bringhurst, and roughly half that for mobile), responsive
 *  line-height, etc.
 *
 *  Strings passed to Copy in curly braces and single quotes
 *  (e.g., <Copy> {'Example \n break'} </Copy>) will break on
 *  newline characters ('\n'), technically generating additional
 *  <p> elements to contain text following them.
 * -------------------------------------------------------------- */

const StyledCopy = styled.p`
  font-size: 1rem;
  font-weight: ${props => props.weight === 'extraLight' ? '200' :
                          props.weight === 'light' ? '300' :
                          props.weight === 'regular' ? '400' :
                          props.weight === 'medium' ? '500' :
                          props.weight === 'semiBold' ? '600' : 
                          props.weight === 'bold' ? '800' : 
                          props.weight === 'ultraBold' ? '900' : '400' };
  
  display: ${props => props.centeredVertically ? 'flex' : 'block'};
  align-items: ${props => props.centeredVertically ? 'center' : 'initial'};
  margin-bottom: ${props => props.centeredVertically ? '0' : '2rem'};

  line-height: 1.375rem;
  letter-spacing: ${props => props.tracking ? props.tracking : 'initial'};
  text-align:  ${props => props.justified ? 'justify' :
                          props.rightAligned ? 'right' :
                          props.centeredHorizontally ? 'center' : 'left'};
  max-width: ${props => props.optimizeLength ? '66ch' : 'initial'};
  color: ${props => props.color ? props.color : '#333'};
  
  @media(max-width: 768px) {
    line-height: 1.25rem;
    max-width: ${props => props.optimizeLength ? '30ch' : 'initial'};
  }
`

export default class Copy extends React.Component {
  render() {
    return (
      <React.Fragment>
      { this.props.children && this.props.children.split('\n').map((paragraph, idx) => {
        return (
        <React.Fragment>
          <StyledCopy
            key={'lorem-' + idx}
            weight={this.props.weight}
            centeredHorizontally={this.props.centeredHorizontally}
            centeredVertically={this.props.centeredVertically}
            rightAligned={this.props.rightAligned}
            justified={this.props.justified}
            tracking={this.props.tracking}
            optimizeLength={this.props.optimizeLength}>
            { paragraph }
          </StyledCopy>
        </React.Fragment>
        );
      })}
      </React.Fragment>
    );
  }
}

Copy.propTypes = {
  weight: PropTypes.oneOf(['extraLight', 'light', 'medium', 'regular', 'semiBold', 'bold', 'ultraBold']),
  centeredHorizontally: PropTypes.bool,
  centeredVertically: PropTypes.bool,
  rightAligned: PropTypes.bool,
  justified: PropTypes.bool,
  tracking: PropTypes.string,
  optimizeLength: PropTypes.bool,
}

