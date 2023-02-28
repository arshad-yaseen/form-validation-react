import React, { Component, ReactNode } from 'react';

type Props = {
    name: string;
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
      console.log(this.props.children);
      console.log(this.state.form);
      console.log(this.props.name);
      
      return (
        <>
          {this.props.name}
        </>
      );
    }
  }
  

export default ValidateForm;