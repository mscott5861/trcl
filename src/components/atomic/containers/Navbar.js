import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'



/*---------------------------------------------------------------
 *  A navbar component that accepts provides three containers,
 *  groupLeft, groupCenter, and groupRight, for React Elements
 *  (multiple elements can be passed by wrapping them in a 
 *  container element and positioning as desired). Used display:
 *  flex to vertically and horizontally align items passed it.
 *  Horizontal alignment is identical to the group to which the
 *  content belongs: groupLeft is left-aligned, groupCenter is
 *  center-aligned, and groupRight is right-aligned.
 * -------------------------------------------------------------- */

const StNavbar = styled.div`
  position: ${props => props.sticky ? 'fixed' : 'static'};
  background-color: ${props => props.bgColor ? props.bgColor : 'grey'};
  color: ${props => props.color ? props.color : '#fff'};
  padding: ${props => props.padding ? props.padding : '1rem 2rem'};
  width: 100%;
  z-index: 1000;
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
`

const StLeftContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-column: 1 / span 1;
`

const StCenterContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 2 / span 1
`

const StRightContainer = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  grid-column: 3 / span 1;
`

export default function Navbar(props) {
  return (
    <StNavbar 
      bgColor={props.bgColor}
      className='navbar'
      color={props.textColor}
      padding={props.padding}
      sticky={props.sticky}>
      <StLeftContainer>
        { props.groupLeft }
      </StLeftContainer>
      <StCenterContainer>
        { props.groupCenter }
      </StCenterContainer>
      <StRightContainer>
        { props.groupRight }
      </StRightContainer>
    </StNavbar>
  );
}

Navbar.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  groupCenter: PropTypes.element,
  groupLeft: PropTypes.element,
  groupRight: PropTypes.element,
  padding: PropTypes.string,
  sticky: PropTypes.bool
}
