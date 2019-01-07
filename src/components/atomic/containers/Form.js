import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const StForm = styled.div`
  
`

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [] 
    };
  }

  updateForm = (inputID, value) => {
    let elements = this.state.elements,
        hasFoundElement = false;

    for (let i = 0; i < elements.length && !hasFoundElement; i++) {
      if (elements[i].inputID === inputID) {
        hasFoundElement = true;
        elements[i].value = value;
      }
    };

    if (!hasFoundElement) {
      elements.push({
        inputID,
        value
      });
    }

    this.setState({
      elements
    });
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        updateForm: this.updateForm
      });
    });

    return (
      <StForm>
        { children }
      </StForm>
    );
  }
}

