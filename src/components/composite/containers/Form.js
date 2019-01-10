import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormCoordinator } from 'components'

export default class Form extends React.Component {
  propTypes = {
    children: PropTypes.node.isRequired
  }

  constructor() {
    super();
    this.formRef = React.createRef();
  }

  onSubmit = () => {
    let data = this.formRef.current.getElements(); 
    this.props.onSubmit && this.props.onSubmit(data);
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
