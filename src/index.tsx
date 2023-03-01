import React, { Component } from "react";


interface validateRequiredObj {
  applyOnly: Array<string>;
  action: String;
  notvalidated: Function;
}
interface Rules {
  validateRequired?: validateRequiredObj;
}

interface Props {
  children: React.ReactNode;
  rules: Rules;
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
    let allowedKeys: Array<keyof Rules> = ["validateRequired"];

    let wrapper = document.getElementById("_validation_wrapper");
    let form = wrapper?.children[0] as HTMLFormElement;

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
              if (input.style.border) {
                input.style.borderColor = "red";
              } else {
                input.style.border = "1px solid red";
              }
            } else {
              // Default Action
            }
          });
        } else {
          form.submit()
        }
      });
    };

    if (rules) {
      if (rules.validateRequired) {
        runValidateRequired();
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
