import React,{ useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

function ValidateForm(props: Props) {
  const form = document.querySelector('#_validation_wrapper')?.children[0]

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <div id='_validation_wrapper'>
      {props.children}
    </div>
  );
}

export default ValidateForm;
