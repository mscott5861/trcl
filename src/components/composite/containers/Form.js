import React from 'react'
import PropTypes from 'prop-types'
import { FormCoordinator } from 'components'



//-------------------------------------------------------------------
// TODO: Not completely satisfied with this solution, as it requires
// the user get a ref to this component, provide it an onSubmit
// function, and then invoke the form's own onSubmit. Confusing and 
// clunky, but seems to be preferable to lifting state up (and putting
// responsibility on keeping track of form element state on the 
// user).
//-------------------------------------------------------------------
export default class Form extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.formRef = React.createRef();
  }

  onSubmit = () => {
    let data = this.formRef.current.getElements(); 
    this.props.onSubmit && typeof this.props.onSubmit !== 'undefined' && this.props.onSubmit(data);
  }

  render() {
    return (
      <React.Fragment>
        <FormCoordinator
          ref={this.formRef}>
          { this.props.children }
        </FormCoordinator>
      </React.Fragment>
    );
  }
}
