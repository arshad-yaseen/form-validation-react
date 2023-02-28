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
      console.log(this.props.children);
      console.log(this.props.name);
      
      
    }
  
    render() {
      return (
        <>
          {this.props.children}
          {this?.props?.name}
        </>
      );
    }
  }
  

export default ValidateForm;