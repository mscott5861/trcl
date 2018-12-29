import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { generateUniqueId } from '../../../../utilities'



/*---------------------------------------------------------------
 *  A sub-layout that generates a two-column layout for its
 *  children. Accepts an optional 'columns' prop, which 
 *  populates its `grid-template-columns` property.
 * -------------------------------------------------------------- */

const StyledTwoColumnLayout = styled.div`
  display: grid; 
  grid-gap: 2rem;
  grid-template-columns: ${props => props.columns ? props.columns : '1fr 1fr'};
  margin-bottom: 2rem;
  align-items: ${props => props.centeredVertically ? 'center' : 'initial'};

  &:first-child {
    grid-column: 1 / span 1;
  }

  &:nth-child(2) {
    grid-column: 2 / span 1;
  }
`

export default class TwoColumnLayout extends React.Component {
  state = {
    id: ''
  }

  componentWillMount() {
    this.setState({
      id: generateUniqueId('tcl')
    }, () => {
      window.addEventListener('resize', this.roundHeightToMultipleOfEight); 
      this.setState({
        oldHeight: document.getElementById(this.state.id).offsetHeight
      });
    });
  }

  //-----------------------------------------------------------------
  //  This is kind of gross. I need these container heights to be
  //  divisible by 8 (to conform to an 8-pixel grid system), and
  //  I don't know of any non-javascript way of ensuring they are.
  //-----------------------------------------------------------------
  componentDidMount() {
    this.roundHeightToMultipleOfEight();
  }

  roundHeightToMultipleOfEight = () => {
    let layout = document.getElementById(this.state.id),
        newHeight = ((Math.floor( this.state.oldHeight / 8 ) + 1) * 8) + 'px';

    layout.style.height = newHeight;
  }

  render() {
    return (
      <StyledTwoColumnLayout
        id={this.state.id}
        columns={this.props.columns}
        centeredVertically={this.props.centeredVertically}>
        { this.props.children }
      </StyledTwoColumnLayout>
    );
  }
}

TwoColumnLayout.propTypes = {
  centeredVertically: PropTypes.bool,
  children: PropTypes.node.isRequired,
  columns: PropTypes.string,
}
