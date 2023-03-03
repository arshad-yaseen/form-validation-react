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
  type?: "regex" | "wildcard";
  modifiers?: string;
  errorMessage?: string;
  allowEmpty?: boolean;
  onsuccess: Function;
  invalid: Function;
}
interface ValidatePhoneObj {
  when: "onblur" | "typing";
  countryCode: "US" | "CA" | "MX" | "GB" | "FR" | "DE" | "JP" | "AU" | "NZ" | "IN" | "CN" | "HK" | "SG" | "TW" | "KR" | "TH" | "PH" | "VN" | "MY" | "BE" | "NL" | "IT" | "ES" | "PT" | "AT" | "CH" | "SE" | "NO" | "DK" | "FI" | "BR" | "AR" | "CO" | "PE" | "CL" | "VE" | "CR" | "PA" | "DO" | "GT" | "EC" | "UY" | "PY" | "BO" | "HN" | "NI" | "SV" | "PR" | "JM" | "BB" | "KY" | "VG" | "TT" | "DM" | "GD" | "GH" | "KE" | "NG" | "UG" | "RW" | "CM" | "SN" | "TZ" | "CI" | "MG" | "ZM" | "ZW" | "MW" | "LS" | "SZ" | "KM" | "DJ" | "RE" | "YT" | "WF" | "NU" | "TK" | "FM" | "MH" | "SA" | "RU"
  phoneInput: string;
  onsuccess: Function;
  invalid: Function;
  message: string;
  isLandlineNumber: Function;
  isMobileNumber: Function
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
  ValidatePhone?: ValidatePhoneObj;
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  rules: Rules;
  errorElement: string;
}

interface ValidateForm {
  props: Props;
}

interface CountryCodeRegexMap {
  [countryCode: string]: RegExp;
}

const countryCodeRegexMap: CountryCodeRegexMap = {
  US: /^(\+?1)?[2-9]\d{9}$/,
  CA: /^(\+?1)?[2-9]\d{9}$/,
  MX: /^(\+?52)?(1)?\d{10}$/,
  GB: /^(\+?44|0)7\d{9}$/,
  FR: /^(\+?33|0)[67]\d{8}$/,
  DE: /^(\+49|0)[1-9]\d{10}$/,
  JP: /^(\+?81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/,
  AU: /^(\+?61|0)[45789]\d{8}$/,
  NZ: /^(\+?64|0)[28]\d{7,9}$/,
  IN: /^(\+?91|0)?[6789]\d{9}$/,
  CN: /^(\+?0?86\-?)?1[3456789]\d{9}$/,
  HK: /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
  SG: /^(\+65)?[89]\d{7}$/,
  TW: /^(\+?886\-?|0)?9\d{8}$/,
  KR: /^(\+?82|0)?1[0-9]{1,2}-?[0-9]{3,4}-?[0-9]{4}$/,
  TH: /^(\+66|66|0)\d{8}$/,
  PH: /^(\+?63|0)?[89]\d{9}$/,
  VN: /^(\+?84|0)?[1-9]\d{8}$/,
  MY: /^(\+?6?01){1}(([145]{1}(-|\s)?\d{7,8})|([236789]{1}(\s|-)?\d{7}))$/,
  BE: /^(\+?32|0)4?\d{8}$/,
  NL: /^(\+?31|0)6?\d{8}$/,
  IT: /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
  ES: /^(\+?34)?[-. ]?6\d{8}$/,
  PT: /^(\+351)?9[1236]\d{7}$/,
  AT: /^(\+43|0)\d{1,4}\d{3,12}$/,
  CH: /^(\+41|0)([1-9])\d{1,12}$/,
  SE: /^(\+?46|0)7\d{8}$/,
  NO: /^(\+?47)?[49]\d{7}$/,
  DK: /^(\+?45)?(\d{8})$/,
  FI: /^(\+?358|0)\s?(4(0|1|2|4|5)|50|4(6|7)|[5-7]|9\d)\s?\d{6,7}$/,
  BR: /^(\+?55|0)?([1-9]{2})?([6-9]{1})(\d{8})$/,
  AR: /^(\+?54|0)?([1-9])?([1-9])(\d{7,8})$/,
  CO: /^(\+?57|0)?([1-8]{1})?([2-4]{1})(\d{7})$/,
  PE: /^(\+?51|0)?([1-9]{2})?([1-9]{1})(\d{7})$/,
  CL: /^(\+?56|0)?([2-9]{1})?([2-9])(\d{6,7})$/,
  VE: /^(\+?58|0)?([4]{1})(1|2|4|6)(\d{7})$/,
  CR: /^(\+?506)?([2-8]{1})(\d{7})$/,
  PA: /^(\+?507)?([2-8]{1})(\d{7})$/,
  DO: /^(\+?1|0)?([8]{1})(0|1)(\d{7})$/,
  GT: /^(\+?502)?([23]{1})(\d{7})$/,
  EC: /^(\+?593|0)([679]{1})(\d{7})$/,
  UY: /^(\+?598|0)([4]{1}[2-9]{1}|[5-9]{1})(\d{6})$/,
  PY: /^(\+?595|0)([9]{1})([1-9]{1})(\d{6})$/,
  BO: /^(\+?591)?([267]{1})(\d{7})$/,
  HN: /^(\+?504)?([239]{1})(\d{7})$/,
  NI: /^(\+?505)?([5689]{1})(\d{7})$/,
  SV: /^(\+?503)?([67]{1})(\d{7})$/,
  PR: /^(\+?1)?([0]{1}[78]{1}|[2367]{1})(\d{7})$/,
  JM: /^(\+?1)?([8]{1}[79]{1}|[45]{1}[67]{1})(\d{7})$/,
  BB: /^(\+?1)?([246]{1})(\d{7})$/,
  KY: /^(\+?1)?([345]{1}([01]{1}|[69]{1})|[24]{1}([26]{1}|[46]{1})|[78]{1}([4]{1}|[5]{1}|[7]{1}|[9]{1}))(\d{6})$/,
  VG: /^(\+?1)?([284]{1})(\d{7})$/,
  TT: /^(\+?1)?([868]{1})(\d{7})$/,
  DM: /^(\+?1)?([767]{1})(\d{7})$/,
  GD: /^(\+?1)?([473]{1})(\d{7})$/,
  GH: /^(\+?233|0)?([23]0|[57][0567]|6[679]|8[124567])(\d{7})$/,
  KE: /^(\+?254|0)?([17](0|1|[3-9])[0-9]{6}|([2-9]|[4-6][0-9])[0-9]{6,7})$/,
  NG: /^(\+?234|0)?[789]\d{9}$/,
  UG: /^(\+?256|0)?([39]0|[47][057]|[568][056]|[7-9][089])(\d{7})$/,
  RW: /^(\+?250|0)?[7]\d{8}$/,
  CM: /^(\+?237|0)?(6[57]|2[2368]|3[89]|4[6-8]|[78]0|\d{2})(\d{6,7})$/,
  SN: /^(\+?221|0)?[76][05](\d{7}|\d{8})$/,
  TZ: /^(\+?255|0)?[67]\d{8}$/,
  CI: /^(\+?225|0)?[017]\d{7}$/,
  MG: /^(\+?261|0)?[2368]\d{7}$/,
  ZM: /^(\+?26[01]|0)?[567]\d{8}$/,
  ZW: /^(\+?263|0)?[17]\d{8}$/,
  MW: /^(\+?265|0)?[11768]\d{7}$/,
  LS: /^(\+?266|0)?[5-8]\d{7}$/,
  SZ: /^(\+?268|0)?[7]\d{7}$/,
  KM: /^(\+?269|0)?[269]\d{7}$/,
  DJ: /^(\+?253|0)?[77-9](\d{6})$/,
  RE: /^(\+?262|0)?[269]\d{8}$/,
  YT: /^(\+?262|0)?[639]\d{8}$/,
  WF: /^(\+?681|0)?\d{6}$/,
  NU: /^(\+?683|0)?\d{4}$/,
  TK: /^(\+?690|0)?\d{4}$/,
  FM: /^(\+?691|0)?[1-9]\d{3}$/,
  MH: /^(\+?692|0)?\d{7}$/,
  SA: /^(\+?966|0)?5[0-9]{8}$/,
  RU: /^(\+?7|8)?9\d{9}$/,
};

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
      "ValidatePhone",
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
      let options = rules.ValidatePattern;

      if (options?.when === "onblur") {
        inputElement.addEventListener("blur", () => {
          let input = inputElement.value;

          if (options?.allowEmpty && input.length === 0) {
            return true;
          }

          let regex: RegExp;
          switch (options?.type) {
            case "regex":
              regex = new RegExp(options?.pattern, options?.modifiers);
              break;
            case "wildcard":
              regex = new RegExp(
                "^" +
                  options?.pattern
                    .replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
                    .replace(/\\\*/g, ".*")
                    .replace(/\\\?/g, ".") +
                  "$",
                options?.modifiers
              );
              break;
            default:
              throw new Error("Invalid validation type");
          }

          const isValid = regex.test(input);

          if (isValid) {
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
          } else {
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
        });
      } else if (options?.when === "typing") {
        inputElement.addEventListener("input", () => {
          let input = inputElement.value;

          if (options?.allowEmpty && input.length === 0) {
            return true;
          }

          let regex: RegExp;

          switch (options?.type) {
            case "regex":
              regex = new RegExp(options?.pattern, options?.modifiers);
              break;
            case "wildcard":
              regex = new RegExp(
                "^" +
                  options?.pattern
                    .replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
                    .replace(/\\\*/g, ".*")
                    .replace(/\\\?/g, ".") +
                  "$",
                options?.modifiers
              );
              break;
            default:
              throw new Error("Invalid validation type");
          }

          const isValid = regex.test(input);

          console.log(isValid, input, options.pattern);

          if (isValid) {
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
          } else {
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
        });
      }
    };

    const runValidatePhone = () => {
      let phoneInput = form.querySelector(
        `input[name="${rules.ValidatePhone?.phoneInput}"]`
      ) as HTMLInputElement;
      let countryCode = rules.ValidatePhone?.countryCode;
      let when = rules.ValidatePhone?.when;
      let onsuccess = rules.ValidatePhone?.onsuccess;
      let invalid = rules.ValidatePhone?.invalid;
      let message = rules.ValidatePhone?.message;

      const mobileRegex = /^(\+?254|0)?([17](0|1|[3-9])[0-9]{6}|([2-9]|[4-6][0-9])[0-9]{6,7})$/;
      const landlineRegex = /^(\+?254|0)?([2-69][0-9]{6,7})$/;

      if (when === "onblur") {
        phoneInput.addEventListener("blur", () => {
          let phoneNumber = phoneInput.value;

          let isValid = false;

          if (countryCode && countryCodeRegexMap[countryCode]) {
            isValid = countryCodeRegexMap[countryCode].test(phoneNumber);
          } else {
            for (const regex of Object.values(countryCodeRegexMap)) {
              if (regex.test(phoneNumber)) {
                isValid = true;
                break;
              }
            }
          }

          if (isValid) {
            if (onsuccess) {
              onsuccess(phoneInput);
            }
            if (errorText) {
              errorText.innerText = "";
            }
            if (phoneInput.style.border) {
              phoneInput.style.borderColor = "";
            } else {
              phoneInput.style.border = "";
            }
          }else{
            if (phoneInput.style.border) {
              phoneInput.style.borderColor = "red";
            } else {
              phoneInput.style.border = "1px solid red";
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

          if(rules.ValidatePhone?.isLandlineNumber){
            rules.ValidatePhone.isLandlineNumber(landlineRegex.test(phoneNumber))
          }
          if(rules.ValidatePhone?.isMobileNumber){
            rules.ValidatePhone.isMobileNumber(mobileRegex.test(phoneNumber))
          }

        });
      } else if (when === "typing") {
        phoneInput.addEventListener("input", () => {
          let phoneNumber = phoneInput.value;

          let isValid = false;

          if (countryCode && countryCodeRegexMap[countryCode]) {
            isValid = countryCodeRegexMap[countryCode].test(phoneNumber);
          } else {
            for (const regex of Object.values(countryCodeRegexMap)) {
              if (regex.test(phoneNumber)) {
                isValid = true;
                break;
              }
            }
          }

          if (isValid) {
            if (onsuccess) {
              onsuccess(phoneInput);
            }
            if (errorText) {
              errorText.innerText = "";
            }
            if (phoneInput.style.border) {
              phoneInput.style.borderColor = "";
            } else {
              phoneInput.style.border = "";
            }
          }else{
            if (phoneInput.style.border) {
              phoneInput.style.borderColor = "red";
            } else {
              phoneInput.style.border = "1px solid red";
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

          if(rules.ValidatePhone?.isLandlineNumber){
            rules.ValidatePhone.isLandlineNumber(landlineRegex.test(phoneNumber))
          }
          if(rules.ValidatePhone?.isMobileNumber){
            rules.ValidatePhone.isMobileNumber(mobileRegex.test(phoneNumber))
          }

        });
      }
    };

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
      if (rules.ValidatePhone) {
        runValidatePhone();
      }
    }
  }

  render() {
    return <div id="_validation_wrapper">{this.props.children}</div>;
  }
}

export default ValidateForm;
