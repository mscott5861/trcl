import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StPopover = styled.div`
  position: absolute;
  left: 135%;
  max-width: 20rem;
  background: #fff;
  border: 1px solid #DDD;
  padding: .5rem 1rem;

`

export default class Popover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <StPopover>
        { this.props.children }
      </StPopover>
    );
  }
}

Popover.propTypes = {
  children: PropTypes.node.isRequired
}
