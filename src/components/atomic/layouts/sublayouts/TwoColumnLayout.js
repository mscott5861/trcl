import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { generateUniqueId } from '../../../../utilities'



/*---------------------------------------------------------------
 *  A sub-layout that generates a two-column layout for its
 *  children. Accepts an optional 'columns' prop, which 
 *  populates its `grid-template-columns` property. Expects only
 *  two children, so if multiple elements are needed per column,
 *  they should be passed in using wrappers.
 * -------------------------------------------------------------- */

const StTwoColumnLayout = styled.div`
  display: grid; 
  grid-gap: 2rem;
  grid-template-columns: ${props => props.columns ? props.columns : '1fr 1fr'};
  align-items: ${props => props.centeredVertically ? 'center' : 'initial'};

  &:first-child {
    grid-column: 1 / span 1;
  }

  &:nth-child(2) {
    grid-column: 2 / span 1;
  }

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
    &:first-child {
      grid-row: 1 / span 1;
    }

    &:nth-child(2) {
      grid-row: 2 / span 1;
      grid-column: 1 / span 1;
    }
  }
`

let resizeTimer;


export default class TwoColumnLayout extends React.Component {
  render() {
    return (
      <StTwoColumnLayout
        columns={this.props.columns}
        centeredVertically={this.props.centeredVertically}>
        { this.props.children }
      </StTwoColumnLayout>
    );
  }
}

TwoColumnLayout.propTypes = {
  centeredVertically: PropTypes.bool,
  children: PropTypes.node.isRequired,
  columns: PropTypes.string,
}
