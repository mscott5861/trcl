import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'



/*---------------------------------------------------------------
 *  A sub-layout that generates a two-column layout for its
 *  children. Accepts an optional 'columns' prop, which 
 *  populates its `grid-template-columns` property.
 * -------------------------------------------------------------- */

const StyledTwoColumnLayout = styled.div`
  display: grid; 
  grid-gap: 2rem;
  grid-template-columns: ${props => props.columns ? props.columns : '1fr 1fr'};
  margin-bottom: 4rem;

  &:first-child {
    grid-column: 1 / span 1;
  }

  &:nth-child(2) {
    grid-column: 2 / span 1;
  }
`

export default class TwoColumnLayout extends React.Component {
  render() {
    return (
      <StyledTwoColumnLayout
        columns={this.props.columns}>
        { this.props.children }
      </StyledTwoColumnLayout>
    );
  }
}

TwoColumnLayout.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.string,
}
