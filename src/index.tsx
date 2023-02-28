import React,{ useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

function ValidateForm(props: Props) {
  const form = document.querySelector('#_validation_parent :first-child');

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <div id='_validation_parent'>
      {props.children}
    </div>
  );
}

export default ValidateForm;
