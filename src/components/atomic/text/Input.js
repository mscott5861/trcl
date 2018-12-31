import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInput = styled.div`

`

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ''
    };
  }

  render() {
    return (
      <StyledInput>
        { this.props.children } 
      </StyledInput>
    );
  }
}


Input.propTypes = {

}
