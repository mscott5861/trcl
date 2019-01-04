import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'



/*---------------------------------------------------------------
 *  A component for copy text that incorporates best practices,
 *  such as optimal length (66 characters for desktop, according 
 *  to Bringhurst, and roughly half that for mobile), responsive
 *  line-height, etc.
 * -------------------------------------------------------------- */

const StCopy = styled.p`
  font-size: 1rem;
  font-weight: ${props => props.weight === 'extraLight' ? '200' :
                          props.weight === 'light' ? '300' :
                          props.weight === 'regular' ? '400' :
                          props.weight === 'medium' ? '500' :
                          props.weight === 'semiBold' ? '600' : 
                          props.weight === 'bold' ? '800' : 
                          props.weight === 'ultraBold' ? '900' : '400' };
  
  color: ${props => props.textColor ? props.textColor : '#333'};
  display: ${props => props.centeredVertically ? 'flex' : 'block'};
  align-items: ${props => props.centeredVertically ? 'center' : 'initial'};
  margin-bottom: ${props => props.centeredVertically ? '0' : '2rem'};
  column-count: ${props => props.columns ? props.columns : '1'};
  column-gap: ${props => props.columnGap ? props.columnGap : 'initial'};

  line-height: 1.5rem;
  letter-spacing: ${props => props.tracking ? props.tracking : 'initial'};
  text-align:  ${props => props.justified ? 'justify' :
                          props.rightAligned ? 'right' :
                          props.centeredHorizontally ? 'center' : 'left'};
  max-width: ${props => props.optimizeLength ? '66ch' : 'initial'};

  &::first-letter {
    font-size: ${props => props.stylizeFirstLetter ? '2rem' : '1rem'};
  }
  
  @media(max-width: 768px) {
    max-width: ${props => props.optimizeLength ? '30ch' : 'initial'};
    column-count: 1;
  }
`

export default function Copy(props) {
    return (
      <StCopy
        centeredHorizontally={props.centeredHorizontally}
        centeredVertically={props.centeredVertically}
        columns={props.columns}
        columnGap={props.columnGap} 
        justified={props.justified}
        optimizeLength={props.optimizeLength}
        rightAligned={props.rightAligned}
        stylizeFirstLetter={props.stylizeFirstLetter}
        textColor={props.textColor}
        tracking={props.tracking}
        weight={props.weight}>
        { props.children }
      </StCopy>
    );
}

Copy.propTypes = {
  centeredHorizontally: PropTypes.bool,
  centeredVertically: PropTypes.bool,
  children: PropTypes.node.isRequired,
  columnGap: PropTypes.string,
  columns: PropTypes.number,
  justified: PropTypes.bool,
  optimizeLength: PropTypes.bool,
  rightAligned: PropTypes.bool,
  textColor: PropTypes.string,
  tracking: PropTypes.string,
  weight: PropTypes.oneOf(['extraLight', 'light', 'medium', 'regular', 'semiBold', 'bold', 'ultraBold']),
}

