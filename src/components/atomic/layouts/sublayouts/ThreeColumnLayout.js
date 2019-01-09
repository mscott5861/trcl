import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'



/*---------------------------------------------------------------
 *  A sub-layout that generates a three-column layout for its
 *  children. Accepts an optional 'columns' prop, which 
 *  populates its `grid-template-columns` property.
 * -------------------------------------------------------------- */

const StThreeColumnLayout = styled.div`
  display: grid; 
  grid-gap: 2rem;
  grid-template-columns: ${props => props.columns ? props.columns : '1fr 1fr 1fr'};
  margin-bottom: 2rem;
  align-items: ${props => props.centeredVertically ? 'center' : 'initial'};

  &:first-child {
    grid-column: 1 / span 1;
  }

  &:nth-child(2) {
    grid-column: 2 / span 1;
  }

  &:nth-child(3) {
    grid-column: 3 / span 1;
    }
`

export default class ThreeColumnLayout extends React.Component {
  static propTypes = {
    centeredVertically: PropTypes.bool,
    children: PropTypes.node.isRequired,
    columns: PropTypes.string,
  }

  state = {
    id: ''
  }

  render() {
    return (
      <StThreeColumnLayout
        id={this.state.id}
        columns={this.props.columns}
        centeredVertically={this.props.centeredVertically}>
        { this.props.children }
      </StThreeColumnLayout>
    );
  }
}


