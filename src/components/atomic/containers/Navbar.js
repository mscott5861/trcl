import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StNavbar = styled.div`
  position: ${props => props.sticky ? 'fixed' : 'static'};
  background-color: ${props => props.bgColor ? props.bgColor : 'grey'};
  color: ${props => props.color ? props.color : '#fff'};
  padding: 1rem 2rem;
  width: 100%;
  z-index: 1000;
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
`

const StLeftContainer = styled.span`
  grid-column: 1 / span 1;
  text-align: left;
`

const StCenterContainer = styled.span`
  grid-column: 2 / span 1
  text-align: center;
`

const StRightContainer = styled.span`
  grid-column: 3 / span 1;
  text-align: right;
`

export default function Navbar(props) {
  return (
    <StNavbar 
      bgColor={props.bgColor}
      className='navbar'
      color={props.textColor}
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
  sticky: PropTypes.bool
}
