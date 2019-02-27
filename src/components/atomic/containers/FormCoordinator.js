import React from 'react'

export default class FormCoordinator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
      formElementHasError: false,
    };
  }

  getElements = () => {
    return this.state.elements;
  }

  updateForm = (inputID, value, formElementHasError) => {
    let elements = this.state.elements,
        formHasError = false,
        hasFoundElement = false;

    elements.forEach((element) => {
      if (element.inputID === inputID) {
        element.value = value;
        element.formElementHasError = formElementHasError;
        hasFoundElement = true;
      }

      if (element.formElementHasError) {
        formHasError = true;
      }
    });

    if (!hasFoundElement) {
      elements.push({
        inputID,
        value,
        formElementHasError,
      });
      
      formHasError = formElementHasError ? true : formHasError;
    }

    this.setState({
      elements,
      formElementHasError: formHasError
    });
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        updateForm: this.updateForm,
        formElementHasError: this.state.formElementHasError
      });
    });

    return (
      <div>
        { children }
      </div>
    );
  }
}


