import React, { Component, ReactNode } from 'react';

type Props = {
    children: ReactNode;
  };
  
  type State = {
    form: ReactNode;
  };
  
  class ValidateForm extends Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = { form: this.props.children };
      
    }
  
    render() {
      const form = document.querySelector('#_validation_parent :first-child');

      console.log(this.props.children);
      console.log(this.state.form);
      console.log(form && form);
      
      
      return (
        <div id='_validation_parent'>
          {this.props.children}
        </div>
      );
    }
  }
  

export default ValidateForm;