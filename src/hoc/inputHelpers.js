import React from 'react'



//----------------------------------------------------------------------------------
// Swappable input helper HOCs for standard input functionality (typeahead, vali-
// dation, error state handling, disabling/enabling, etc.) Currently just stubbed.
//----------------------------------------------------------------------------------

export const withTypeAhead = (WrappedInput, value) => {
  return class extends React.Component {
    render() {
      return (
        <WrappedInput
            value={this.state.value}
            {...this.props} />
      );
    }
  }
}

export const withMask = (WrappedInput, mask) => {
  return class extends React.Component {
    constructor() {
      super();

      this.state = {
        displayValue: '',
        realValue: '',
      }
    }

    handleInputReceived = (passedValue) => {
      let displayValue = '',
          realValue = passedValue.length - 1 >= 0 ? (
                        passedValue[passedValue.length - 1] === '*' ? 
                          this.state.realValue.substring(0, this.state.realValue.length - 1) : 
                          this.state.realValue + passedValue[passedValue.length - 1]) : 
                      '';

      for (let i = 0; i < realValue.length; i++) {
        displayValue += mask;
      }

      this.setState({
        displayValue,
        realValue,
      });

      return realValue;
    }

    render() {
      return (
        <WrappedInput
          displayValue={this.state.displayValue}
          realValue={this.state.realValue}
          handleInputReceived={this.handleInputReceived}
          {...this.props} />
      );
    }
  }
}
