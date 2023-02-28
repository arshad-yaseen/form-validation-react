import React, { Component, ReactNode } from 'react';

type MyProps = {
    name: string;
    children: ReactNode;
  };
  
  type MyState = {
    form: ReactNode;
  };
  
  class ValidateForm extends Component<MyProps, MyState> {
    constructor(props: MyProps) {
      super(props);
      this.state = { form: this.props.children };
    }
  
    render() {
      return (
        <>
          {this.props.children}
        </>
      );
    }
  }
  

export default ValidateForm;