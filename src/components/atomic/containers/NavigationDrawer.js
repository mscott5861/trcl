import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StNavigationDrawer = styled.div`
  position: fixed;
  top: 0;
  padding-top: 62px;
  bottom: 0;
  width: 52%;
  left: ${props => props.isOpen === true ? '-2%' : '-100%'};
  background-color: ${props => props.bgColor ? props.bgColor : '#333'};
  transition: left .25s cubic-bezier(0.97, 0.13, 0.87, 1.03);
  z-index: 999;
`

const StContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem;
`

const StP = styled.p`
  font-size: 4rem;
  color: #fff;
  font-weight: 800;
`


export default class NavigationDrawer extends React.Component {
  static propTypes = {
    bgColor: PropTypes.string,
    children: PropTypes.node,
    isOpen: PropTypes.bool,
  }

  render() {
    return (
      <StNavigationDrawer
        bgColor={this.props.bgColor}
        isOpen={this.props.isOpen}>
        <StContent
          isOpen={this.props.isOpen}>
          <StP>
            HELLO
          </StP>
        </StContent>
      </StNavigationDrawer>
    );
  }
}


