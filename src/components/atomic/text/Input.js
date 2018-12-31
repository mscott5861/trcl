import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StInput = styled.div`

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
      <StInput>
        { this.props.children } 
      </StInput>
    );
  }
}


Input.propTypes = {

}
