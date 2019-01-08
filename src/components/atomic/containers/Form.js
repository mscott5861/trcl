import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StForm = styled.div`
  
`

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
      hasError: false
    };
  }

  updateForm = (inputID, value, hasError) => {
    let elements = this.state.elements,
        hasFoundError = false,
        hasFoundElement = false;

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].inputID === inputID) {
        elements[i].value = value;
        elements[i].hasError = hasError;
        hasFoundElement = true;
      }

      if (elements[i].hasError) {
        hasFoundError = true;
      }
    };

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

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

