import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StNavigationDrawer = styled.div`
  position: fixed;
  top: 0;
  padding-top: ${props => props.shouldClearNavbar && props.shouldClearNavbar === true ? '62px' : '0'};
  bottom: 0;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  left: ${props => props.isOpen === true ? '-2%' : '-100%'};
  background-color: ${props => props.bgColor ? props.bgColor : '#333'};
  transition: left .25s cubic-bezier(0.97, 0.13, 0.87, 1.03);
  z-index: 999;
  border-right: ${props => props.hasRightBorder && props.hasRightBorder === true ? '4px solid #FFF' : 'none'};
`

const StContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 2.5rem;
`

export default class NavigationDrawer extends React.Component {
  static propTypes = {
    bgColor: PropTypes.string,
    children: PropTypes.node,
    hasRightBorder: PropTypes.bool,
    isOpen: PropTypes.bool,
  }

  render() {
    return (
      <StNavigationDrawer
        bgColor={this.props.bgColor}
        hasRightBorder={this.props.hasRightBorder}
        isOpen={this.props.isOpen}
        shouldClearNavbar={this.props.shouldClearNavbar}>
        <StContent
          isOpen={this.props.isOpen}>
          { this.props.children }
        </StContent>
      </StNavigationDrawer>
    );
  }
}


