import React from "react";

interface ValidateRequiredObj {
  applyOnly: Array<string>;
  action: "both" | "input_red_border" | "show_error_message";
  notvalidated: Function;
  onsuccess: Function;
  message: string;
}
interface ValidateMinMaxObj {
  when: "onblur" | "typing";
  message: {
    min: string;
    max: string;
  };
  onsuccess: Function;
  exceedsMax: Function;
  exceedsMin: Function;
}
interface ValidatePatternObj {
  when: "onblur" | "typing";
  input: string;
  pattern: string;
  type?: 'regex' | 'wildcard';
  modifiers?: string;
  errorMessage?: string;
  allowEmpty?: boolean;
  onsuccess: Function;
  invalid: Function
}

interface ValidateEmailObj {
  when: "onblur" | "typing";
  message: string;
  onsuccess: Function;
  invalid: Function;
  emailInput: string;
  type:
    | "personal"
    | "business"
    | "yahoo"
    | "gmail"
    | "hotmail"
    | "aol"
    | "isp"
    | "education"
    | "government"
    | "nonprofit"
    | "international"
    | "domain-specific"
    | "alias";
}

interface Rules {
  validateRequired?: ValidateRequiredObj;
  ValidateMinMax?: ValidateMinMaxObj;
  ValidateEmail?: ValidateEmailObj;
  ValidatePattern?: ValidatePatternObj;
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  rules: Rules;
  errorElement: string;
}

interface ValidateForm {
  props: Props;
}

class ValidateForm extends React.Component<Props> {
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
    let allowedKeys: Array<keyof Rules> = [
      "validateRequired",
      "ValidateMinMax",
      "ValidateEmail",
      "ValidatePattern",
    ];

    let wrapper = document.getElementById("_validation_wrapper");
    let form = wrapper?.children[0] as HTMLFormElement;
    let submit_button =
      (form.querySelector('button[type="submit"]') as HTMLFormElement) ||
      (form.querySelector('input[type="submit"]') as HTMLFormElement);
    let errorText = document.querySelector(errorElement) as HTMLElement;
    let errorMessage = String;

    submit_button.addEventListener("submit", () => {
      if (errorText?.innerText === "") {
        form.submit();
      }
    });

    const setErrorText = (message: string) => {
      if (errorText) {
        errorText.innerText = message;
      }
    };

    const runValidateRequired = () => {
      // Check If All Required Feilds Filled

      form.addEventListener("input", (event) => {
        const input = event.target as HTMLInputElement;

        input.style.borderColor = "";
      });

      const submit_button =
        form?.querySelector<HTMLInputElement>('button[type="submit"]') ||
        form?.querySelector<HTMLInputElement>('input[type="submit"]');

      submit_button?.addEventListener("click", (event) => {
        event.preventDefault();

        let requiredInputs: HTMLInputElement[] = [];

        if (rules.validateRequired?.applyOnly) {
          rules.validateRequired?.applyOnly.forEach((inputName: String) => {
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
            if (rules.validateRequired?.notvalidated) {
              rules.validateRequired?.notvalidated(missingInputs);
            }
            if (index === 0) {
              input.focus();
            }
            if (rules.validateRequired?.action === "input_red_border") {
              if (input.style.border) {
                input.style.borderColor = "red";
              } else {
                input.style.border = "1px solid red";
              }
            } else if (
              rules.validateRequired?.action === "show_error_message"
            ) {
              if (rules.validateRequired.message) {
                setErrorText(rules.validateRequired.message);
              }
            } else if (rules.validateRequired?.action === "both") {
              if (rules.validateRequired?.message) {
                setErrorText(rules.validateRequired?.message);
              }
              if (input.style.border) {
                input.style.borderColor = "red";
              } else {
                input.style.border = "1px solid red";
              }
            }
          });
        } else {
          if (errorText) {
            errorText.innerText = "";
          }
          if (rules.validateRequired?.onsuccess) {
            rules.validateRequired?.onsuccess();
          } else {
            if (errorText.innerText === "") {
              form.submit();
            }
          }
        }
      });
    };

    const runValidateMinMax = () => {
      const inputs = form.querySelectorAll("input[min][max]");

      if (rules.ValidateMinMax?.when === "typing") {
        inputs.forEach((input) => {
          input.addEventListener("input", (event) => {
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
                  if (rules.ValidateMinMax?.exceedsMin) {
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
                    if (rules.ValidateMinMax?.message) {
                      setErrorText(rules.ValidateMinMax?.message.min);
                    }
                  }
                } else if (value > max) {
                  if (rules.ValidateMinMax?.exceedsMax) {
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
                    if (rules.ValidateMinMax?.message) {
                      setErrorText(rules.ValidateMinMax?.message.max);
                    }
                  }
                } else {
                  input.style.borderColor = "";
                  if (errorText) {
                    errorText.innerText = "";
                  }
                  if (rules.ValidateMinMax?.onsuccess) {
                    rules.ValidateMinMax?.onsuccess(input);
                  }
                }
              } else if (type === "text") {
                if (value.length < Number(min)) {
                  if (rules.ValidateMinMax?.exceedsMin) {
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
                    if (rules.ValidateMinMax?.message) {
                      setErrorText(rules.ValidateMinMax?.message.min);
                    }
                  }
                } else if (value.length > Number(max)) {
                  if (rules.ValidateMinMax?.exceedsMax) {
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
                    if (rules.ValidateMinMax?.message) {
                      setErrorText(rules.ValidateMinMax?.message.max);
                    }
                  }
                } else {
                  input.style.borderColor = "";
                  if (errorText) {
                    errorText.innerText = "";
                  }

                  if (rules.ValidateMinMax?.onsuccess) {
                    rules.ValidateMinMax?.onsuccess(input);
                  }
                }
              }
            }
          });
        });
      } else if (rules.ValidateMinMax?.when === "onblur") {
        inputs.forEach((input) => {
          input.addEventListener("blur", (event) => {
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
                  if (rules.ValidateMinMax?.exceedsMin) {
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
                    if (rules.ValidateMinMax?.message) {
                      setErrorText(rules.ValidateMinMax?.message.min);
                    }
                  }
                } else if (value > max) {
                  if (rules.ValidateMinMax?.exceedsMax) {
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
                    if (rules.ValidateMinMax?.message) {
                      setErrorText(rules.ValidateMinMax?.message.max);
                    }
                  }
                } else {
                  input.style.borderColor = "";
                  if (errorText) {
                    errorText.innerText = "";
                  }
                  if (rules.ValidateMinMax?.onsuccess) {
                    rules.ValidateMinMax?.onsuccess(input);
                  }
                }
              } else if (type === "text") {
                if (value.length < Number(min)) {
                  if (rules.ValidateMinMax?.exceedsMin) {
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
                    if (rules.ValidateMinMax?.message) {
                      setErrorText(rules.ValidateMinMax?.message.min);
                    }
                  }
                } else if (value.length > Number(max)) {
                  if (rules.ValidateMinMax?.exceedsMax) {
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
                    if (rules.ValidateMinMax?.message) {
                      setErrorText(rules.ValidateMinMax?.message.max);
                    }
                  }
                } else {
                  if (errorText) {
                    errorText.innerText = "";
                  }
                  input.style.borderColor = "";
                  if (rules.ValidateMinMax?.onsuccess) {
                    rules.ValidateMinMax?.onsuccess(input);
                  }
                }
              }
            }
          });
        });
      }
    };

    const runValidateEmail = () => {
      let emailPattern: RegExp;
      let type = rules.ValidateEmail?.type;
      let emailInput = form.querySelector(
        `input[name="${rules.ValidateEmail?.emailInput}"]`
      ) as HTMLInputElement;
      let message = rules.ValidateEmail?.message;
      let onsuccess = rules.ValidateEmail?.onsuccess;
      let invalid = rules.ValidateEmail?.invalid;
      let when = rules.ValidateEmail?.when;

      switch (type) {
        case "personal":
          emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          break;
        case "business":
          emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          break;
        case "yahoo":
          emailPattern = /^[a-zA-Z0-9._%+-]+@yahoo\.com$/;
          break;
        case "gmail":
          emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
          break;
        case "hotmail":
          emailPattern = /^[a-zA-Z0-9._%+-]+@(hotmail|outlook)\.com$/;
          break;
        case "aol":
          emailPattern = /^[a-zA-Z0-9._%+-]+@aol\.com$/;
          break;
        case "isp":
          emailPattern =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(comcast|verizon|att)\.com$/;
          break;
        case "education":
          emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(edu)$/;
          break;
        case "government":
          emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(gov)$/;
          break;
        case "nonprofit":
          emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(org)$/;
          break;
        case "international":
          emailPattern =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}\.[a-zA-Z]{2}$/;
          break;
        case "domain-specific":
          emailPattern =
            /^[a-zA-Z0-9._%+-]+@(support|sales|info)\.[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          break;
        case "alias":
          emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          break;
        default:
          return false;
      }

      if (when === "onblur") {
        emailInput.addEventListener("blur", () => {
          let email = emailInput.value;

          if (emailPattern.test(email)) {
            if (onsuccess) {
              onsuccess(emailInput);
            }
            if (errorText) {
              errorText.innerText = "";
            }
            if (emailInput.style.border) {
              emailInput.style.borderColor = "";
            } else {
              emailInput.style.border = "";
            }
          } else {
            if (emailInput.style.border) {
              emailInput.style.borderColor = "red";
            } else {
              emailInput.style.border = "1px solid red";
            }
            if (invalid) {
              invalid();
            }
            if (errorText) {
              if (message) {
                errorText.innerText = message;
              }
            }
          }
        });
      } else if (when === "typing") {
        emailInput.addEventListener("input", () => {
          let email = emailInput.value;
          if (emailPattern.test(email)) {
            if (onsuccess) {
              onsuccess(emailInput);
            }
            if (errorText) {
              errorText.innerText = "";
            }
            if (emailInput.style.border) {
              emailInput.style.borderColor = "";
            } else {
              emailInput.style.border = "";
            }
          } else {
            if (emailInput.style.border) {
              emailInput.style.borderColor = "red";
            } else {
              emailInput.style.border = "1px solid red";
            }
            if (invalid) {
              invalid();
            }
            if (errorText) {
              if (message) {
                errorText.innerText = message;
              }
            }
          }
        });
      }
    };

    const runValidatePattern = () => {

      let inputElement = form.querySelector(
        `input[name="${rules.ValidatePattern?.input}"]`
      ) as HTMLInputElement;
      let options = rules.ValidatePattern

      if (options?.when === "onblur") {
        if(inputElement){
          inputElement.addEventListener("blur",()=> {
            let input = inputElement.value
  
            if (options?.allowEmpty && input.length === 0) {
              return true;
            }
          
            let regex: RegExp;
            switch (options?.type) {
              case 'regex':
                regex = new RegExp(options?.pattern, options?.modifiers);
                break;
              case 'wildcard':
                regex = new RegExp(
                  '^' +
                    options?.pattern
                      .replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
                      .replace(/\\\*/g, '.*')
                      .replace(/\\\?/g, '.') +
                    '$',
                  options?.modifiers
                );
                break;
              default:
                throw new Error('Invalid validation type');
            }
          
            const isValid = regex.test(input);
  
            if(isValid){
              if (options?.onsuccess) {
                options?.onsuccess(inputElement);
              }
              if (errorText) {
                errorText.innerText = "";
              }
              if (inputElement.style.border) {
                inputElement.style.borderColor = "";
              } else {
                inputElement.style.border = "";
              }
            }else{
              if (inputElement.style.border) {
                inputElement.style.borderColor = "red";
              } else {
                inputElement.style.border = "1px solid red";
              }
              if (options?.invalid) {
                options?.invalid();
              }
              if (errorText) {
                if (options?.errorMessage) {
                  errorText.innerText = options?.errorMessage;
                }
              }
            }
          
          
            
  
          })
        }
       

      }else if(options?.when === "typing"){

        if(inputElement){
          inputElement.addEventListener("input",()=> {
            let input = inputElement.value
  
            if (options?.allowEmpty && input.length === 0) {
              return true;
            }
          
            let regex: RegExp;

            if(options?.type){
              
            }

            switch (options?.type) {
              case 'regex':
                regex = new RegExp(options?.pattern, options?.modifiers);
                break;
              case 'wildcard':
                regex = new RegExp(
                  '^' +
                    options?.pattern
                      .replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
                      .replace(/\\\*/g, '.*')
                      .replace(/\\\?/g, '.') +
                    '$',
                  options?.modifiers
                );
                break;
              default:
                throw new Error('Invalid validation type');
            }
          
            const isValid = regex.test(input);
  
            if(isValid){
              if (options?.onsuccess) {
                options?.onsuccess(inputElement);
              }
              if (errorText) {
                errorText.innerText = "";
              }
              if (inputElement.style.border) {
                inputElement.style.borderColor = "";
              } else {
                inputElement.style.border = "";
              }
            }else{
              if (inputElement.style.border) {
                inputElement.style.borderColor = "red";
              } else {
                inputElement.style.border = "1px solid red";
              }
              if (options?.invalid) {
                options?.invalid();
              }
              if (errorText) {
                if (options?.errorMessage) {
                  errorText.innerText = options?.errorMessage;
                }
              }
            }
          
  
          })
        }

        

      }
      

    }

    if (rules) {
      if (rules.validateRequired) {
        runValidateRequired();
      }
      if (rules.ValidateMinMax) {
        runValidateMinMax();
      }
      if (rules.ValidateEmail) {
        runValidateEmail();
      }
      if (rules.ValidatePattern) {
        runValidatePattern();
      }
    }
  }

  render() {
    return <div id="_validation_wrapper">{this.props.children}</div>;
  }
}

export default ValidateForm;
