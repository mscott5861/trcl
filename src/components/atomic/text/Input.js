import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StInputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 2.25rem;
  border: 1px solid #BBB;
  border-radius: 5px;
  margin-top: 1.5rem;
`

const StInput = styled.input`
  position: absolute;
  outline: none;
  background: transparent;
  border: 0px;
  height: 98%;
  width: 100%;
  padding-left: 1rem;
`

const StLabel = styled.p`
  position: absolute;
  left: 1rem;
  font-size: .65rem;
  top: 50%;
  color: #888;
  letter-spacing: .125rem;
  transform: translateY(-50%);
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
      <StInputWrapper
        onChange={this.props.handleInput}>
        <StInput>
        
        </StInput>
        <StLabel>
          { this.props.label }
        </StLabel>

        { this.props.children } 
      </StInputWrapper>
    );
  }
}


Input.propTypes = {

}
