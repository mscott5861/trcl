import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StForm = styled.div`
  
`

export default class FormCoordinator extends React.Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
      elements: [],
      hasError: false
    };
  }

  getElements = () => {
    console.log("GetElements called!");
    return this.state.elements;
  }

  updateForm = (inputID, value, hasError) => {
    let elements = this.state.elements,
        hasFoundError = false,
        hasFoundElement = false;

    elements.forEach((element) => {
      if (element.inputID === inputID) {
        element.value = value;
        element.hasError = hasError;
        hasFoundElement = true;
      }

      if (element.hasError) {
        hasFoundError = true;
      }
    });

    if (!hasFoundElement) {
      elements.push({
        inputID,
        value,
        hasError
      });
      
      hasFoundError = hasError ? true : hasFoundError;
    }

    this.setState({
      elements,
      hasError: hasFoundError
    });
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        updateForm: this.updateForm,
        hasError: this.state.hasError
      });
    });

    return (
      <StForm>
        { children }
      </StForm>
    );
  }
}


