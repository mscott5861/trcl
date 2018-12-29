import React from 'react'



//----------------------------------------------------------------------------------
// Swappable input helper HOCs for standard input functionality (typeahead, vali-
// dation, error state handling, disabling/enabling, etc.)
//----------------------------------------------------------------------------------

export const withTypeAhead = (WrappedInput, data) => {
  return class extends React.Component {
    render() {
      return (
        <WrappedInput
            data={this.state.data}
            {...this.props} />
      );
    }
  }
}
