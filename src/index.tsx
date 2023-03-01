import React, { Component } from "react";


interface ValidateRequiredObj {
  applyOnly: Array<string>;
  action: String;
  notvalidated: Function;
  onsuccess: Function
  message: string;
}
interface ValidateMinMaxObj {
  when: String;
  message: {
    min: string;
    max: string;
  };
  onsuccess: Function
  exceedsMax: Function;
  exceedsMin: Function;
}
interface Rules {
  validateRequired?: ValidateRequiredObj;
  ValidateMinMax?: ValidateMinMaxObj;
}

interface Props {
  children: React.ReactNode;
  rules: Rules;
  errorElement: string;
}

class ValidateForm extends Component<Props> {
  componentDidMount() {
    this.init();
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.rules !== prevProps.rules) {
      this.init();
    }
  }

  init() {
    let { rules } = this.props;
    let { errorElement } = this.props;
    let allowedKeys: Array<keyof Rules> = ["validateRequired","ValidateMinMax"];

    let wrapper = document.getElementById("_validation_wrapper");
    let form = wrapper?.children[0] as HTMLFormElement;
    let submit_button = form.querySelector('button[type="submit"]') as HTMLFormElement || form.querySelector('input[type="submit"]') as HTMLFormElement
    let errorText = document.querySelector(errorElement) as HTMLElement;
    let errorMessage = String

    submit_button.addEventListener("submit",()=> {
      if(errorText.innerText === ""){
        form.submit()
      }
    })

    const setErrorText = (message:string) => {
      if (errorText) {
        errorText.innerText = message
      }
    }    

    const runValidateRequired = () => {
      // Check If All Required Feilds Filled



      form.addEventListener("input", (event) => {
        const input = event.target as HTMLInputElement;

        input.style.borderColor = "";
      });

      const submit_button = form?.querySelector<HTMLInputElement>(
        'button[type="submit"]'
      ) || form?.querySelector<HTMLInputElement>(
        'input[type="submit"]'
      );


      submit_button?.addEventListener("click", (event) => {
        event.preventDefault();

        let requiredInputs: HTMLInputElement[] = [];

        if (rules.validateRequired?.applyOnly) {
          rules.validateRequired?.applyOnly.forEach((inputName) => {
            requiredInputs.push(
              form?.querySelector<HTMLInputElement>(
                `[name="${inputName}"]`
              ) as HTMLInputElement
            );
          });
        } else {
          form
            ?.querySelectorAll<HTMLInputElement>("input[required]")
            .forEach((input) => {
              requiredInputs.push(input);
            });
        }

        const missingInputs: HTMLInputElement[] = [];

        requiredInputs?.forEach((input) => {
          if (!input.value) {
            missingInputs.push(input);
          }
        });

        if (missingInputs.length > 0) {
          missingInputs.forEach((input, index) => {
            rules.validateRequired?.notvalidated(missingInputs);
            if (index === 0) {
              input.focus();
            }
            if (rules.validateRequired?.action === "input_red_border") {
              if(rules.validateRequired.message){
                setErrorText(rules.validateRequired.message)
              }
              if (input.style.border) {
                input.style.borderColor = "red";
              } else {
                input.style.border = "1px solid red";
              }
            } 
          });
        } else {
          if(rules.validateRequired?.onsuccess){
            rules.validateRequired?.onsuccess();
          }else{
            if(errorText.innerText === ""){
              form.submit()
            }
          }
        }
      });
    };

    const runValidateMinMax = () => {
      const inputs = form.querySelectorAll('input[min][max]');



        if (rules.ValidateMinMax?.when === "typing") {
          inputs.forEach(input => {
            input.addEventListener('input', (event) => {
              const input = event.target as HTMLInputElement;
              const min = input.min;
              const max = input.max;
              const value = input.value;
              const type = input.type;
              const inputMinMessage = input.getAttribute("data-min-message");
              const inputMaxMessage = input.getAttribute("data-max-message");
              
              if (min && max) {
                if (type === "number") {
                  if (value < min) {
                    if(rules.ValidateMinMax?.exceedsMin){
                      rules.ValidateMinMax?.exceedsMin(input);
                    }
                    if (input.style.border) {
                      input.style.borderColor = "red";
                    } else {
                      input.style.border = "1px solid red";
                    }
                    if (inputMinMessage) {
                      setErrorText(inputMinMessage);
                    } else {
                      setErrorText(rules.ValidateMinMax?.message.min!);
                    }
                  } else if (value > max) {
                    if(rules.ValidateMinMax?.exceedsMax){
                      rules.ValidateMinMax?.exceedsMax(input);
                    }
                    if (input.style.border) {
                      input.style.borderColor = "red";
                    } else {
                      input.style.border = "1px solid red";
                    }
                    if (inputMaxMessage) {
                      setErrorText(inputMaxMessage);
                    } else {
                      setErrorText(rules.ValidateMinMax?.message.max!);
                    }
                  } else {
                    input.style.borderColor = "";
                    errorText.innerText = ""
                    if(rules.ValidateMinMax?.onsuccess){
                      rules.ValidateMinMax?.onsuccess(input);
                    }
                  }
                } else if (type === "text") {
                  if (value.length < Number(min)) {
                    if(rules.ValidateMinMax?.exceedsMin){
                      rules.ValidateMinMax?.exceedsMin(input);
                    }
                    if (input.style.border) {
                      input.style.borderColor = "red";
                    } else {
                      input.style.border = "1px solid red";
                    }
                    if (inputMinMessage) {
                      setErrorText(inputMinMessage);
                    } else {
                      setErrorText(rules.ValidateMinMax?.message.min!);
                    }
                  } else if (value.length > Number(max)) {
                    if(rules.ValidateMinMax?.exceedsMax){
                      rules.ValidateMinMax?.exceedsMax(input);
                    }
                    if (input.style.border) {
                      input.style.borderColor = "red";
                    } else {
                      input.style.border = "1px solid red";
                    }
                    if (inputMaxMessage) {
                      setErrorText(inputMaxMessage);
                    } else {
                      setErrorText(rules.ValidateMinMax?.message.max!);
                    }
                  } else {
                    input.style.borderColor = "";
                    errorText.innerText = ""
                    if(rules.ValidateMinMax?.onsuccess){
                      rules.ValidateMinMax?.onsuccess(input);
                    }
                  }
                }
              }
            });
          });
          
        }
        else if(rules.ValidateMinMax?.when === "onblur"){
          
inputs.forEach(input => {
  input.addEventListener('blur', (event) => {
    const input = event.target as HTMLInputElement;
    const min = input.min;
    const max = input.max;
    const value = input.value;
    const type = input.type;
    const inputMinMessage = input.getAttribute("data-min-message");
    const inputMaxMessage = input.getAttribute("data-max-message");
    
    if (min && max) {
      if (type === "number") {
        if (value < min) {
          if(rules.ValidateMinMax?.exceedsMin){
            rules.ValidateMinMax?.exceedsMin(input);
          }
          if (input.style.border) {
            input.style.borderColor = "red";
          } else {
            input.style.border = "1px solid red";
          }
          if (inputMinMessage) {
            setErrorText(inputMinMessage);
          } else {
            setErrorText(rules.ValidateMinMax?.message.min!);
          }
        } else if (value > max) {
          if(rules.ValidateMinMax?.exceedsMax){
            rules.ValidateMinMax?.exceedsMax(input);
          }
          if (input.style.border) {
            input.style.borderColor = "red";
          } else {
            input.style.border = "1px solid red";
          }
          if (inputMaxMessage) {
            setErrorText(inputMaxMessage);
          } else {
            setErrorText(rules.ValidateMinMax?.message.max!);
          }
        } else {
          input.style.borderColor = "";
          if(rules.ValidateMinMax?.onsuccess){
            rules.ValidateMinMax?.onsuccess(input);
          }
        }
      } else if (type === "text") {
        if (value.length < Number(min)) {
          if(rules.ValidateMinMax?.exceedsMin){
            rules.ValidateMinMax?.exceedsMin(input);
          }
          if (input.style.border) {
            input.style.borderColor = "red";
          } else {
            input.style.border = "1px solid red";
          }
          if (inputMinMessage) {
            setErrorText(inputMinMessage);
          } else {
            setErrorText(rules.ValidateMinMax?.message.min!);
          }
        } else if (value.length > Number(max)) {
          if(rules.ValidateMinMax?.exceedsMax){
            rules.ValidateMinMax?.exceedsMax(input);
          }
          if (input.style.border) {
            input.style.borderColor = "red";
          } else {
            input.style.border = "1px solid red";
          }
          if (inputMaxMessage) {
            setErrorText(inputMaxMessage);
          } else {
            setErrorText(rules.ValidateMinMax?.message.max!);
          }
        } else {
          input.style.borderColor = "";
          if(rules.ValidateMinMax?.onsuccess){
            rules.ValidateMinMax?.onsuccess(input);
          }
        }
      }
    }
  });
});
        }

      

      
      


      
    }

    if (rules) {
      if (rules.validateRequired) {
        runValidateRequired();
      }
      if(rules.ValidateMinMax){
        runValidateMinMax()
      }
    }
  }

  render() {
    return (
     
        <div id="_validation_wrapper">
          {this.props.children}
        </div>
     
    );
  }
}

export default ValidateForm;
