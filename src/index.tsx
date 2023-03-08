import React, { FunctionComponent } from "react";

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
  countryCode:
    | "US"
    | "CA"
    | "MX"
    | "GB"
    | "FR"
    | "DE"
    | "JP"
    | "AU"
    | "NZ"
    | "IN"
    | "CN"
    | "HK"
    | "SG"
    | "TW"
    | "KR"
    | "TH"
    | "PH"
    | "VN"
    | "MY"
    | "BE"
    | "NL"
    | "IT"
    | "ES"
    | "PT"
    | "AT"
    | "CH"
    | "SE"
    | "NO"
    | "DK"
    | "FI"
    | "BR"
    | "AR"
    | "CO"
    | "PE"
    | "CL"
    | "VE"
    | "CR"
    | "PA"
    | "DO"
    | "GT"
    | "EC"
    | "UY"
    | "PY"
    | "BO"
    | "HN"
    | "NI"
    | "SV"
    | "PR"
    | "JM"
    | "BB"
    | "KY"
    | "VG"
    | "TT"
    | "DM"
    | "GD"
    | "GH"
    | "KE"
    | "NG"
    | "UG"
    | "RW"
    | "CM"
    | "SN"
    | "TZ"
    | "CI"
    | "MG"
    | "ZM"
    | "ZW"
    | "MW"
    | "LS"
    | "SZ"
    | "KM"
    | "DJ"
    | "RE"
    | "YT"
    | "WF"
    | "NU"
    | "TK"
    | "FM"
    | "MH"
    | "SA"
    | "RU";
  phoneInput: string;
  onsuccess: Function;
  invalid: Function;
  message: string;
  isLandlineNumber: Function;
  isMobileNumber: Function;
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

interface ValidateNumberObj {
  when: "onblur" | "typing";
  input: string;
  min?: number;
  max?: number;
  decimalPlaces?: number;
  allowNegative?: boolean;
  integersOnly?: boolean;
  base?: number;
  customErrorMessages: {
    [key: string]: string;
  };
  onsuccess?: Function;
  invalid?: Function;
}
interface ValidateIntegerObj {
  when: "onblur" | "typing";
  input: string;
  minValue?: number;
  maxValue?: number;
  uniqueValues?: number[];
  positiveOnly?: boolean;
  evenOnly?: boolean;
  divisibleBy?: number;
  invalid?: Function;
  customErrorMessages?: {
    notANumber?: string;
    notAnInteger?: string;
    outOfRange?: string;
    notUnique?: string;
    notPositive?: string;
    notEven?: string;
    notDivisible?: string;
  };
}

interface ValidateFloatObj {
  when: "onblur" | "typing";
  input: string;
  invalid?: string;
  required?: boolean;
  min?: number;
  max?: number;
  precision?: number;
  customErrorMessages?: {
    required?: string;
    invalid?: string;
    min?: string;
    max?: string;
    precision?: string;
  };
}
interface ValidateDateObj {
  when: "onblur" | "typing";
  input: string | Date;
  minDate?: Date;
  maxDate?: Date;
  allowOnlyBusinessDay?: boolean;
  allowOnlyWeekend?: boolean;
  customFormat?: string;
  timeZone?: string;
  customErrorMessages?: {
    invalidDate?: string;
    minDate?: string;
    maxDate?: string;
    businessDay?: string;
    notWeekend?: string;
    invalidFormat?: string;
    invalidTimeZone?: string;
  };
}

interface TimeRange {
  startTime: string;
  endTime: string;
}

interface TimeInterval {
  startInterval: number;
  endInterval: number;
}

interface Timezone {
  name: string;
  offset: number;
}
interface ValidateTimeObj {
  when: "onblur" | "typing";
  input: string;
  timezone?: Timezone;
  timeRange?: TimeRange;
  timeInterval?: TimeInterval;
  customErrorMessages: {
    invalidFormat: string;
    invalidRange: string;
    invalidTimezone: string;
    invalidInterval: string;
  };
}

interface ValidateUrlObj {
  when: "onblur" | "typing";
  input: string;
  CustomErrorMessages: {
    invalidUrl: string;
    invalidProtocol: string;
    invalidDomain: string;
    invalidIpAddress: string;
    inaccessibleUrl: string;
    invalidCharacters: string;
  };
  checkUrl: boolean;
  checkProtocol: boolean;
  checkDomain: boolean;
  checkIpAddress: boolean;
  checkAccessibleUrl: boolean;
  checkCharacters: boolean;
  protocols: string[];
}
interface ValidateCreditCardObj {
  when: "onblur" | "typing";
  allowedCards: string[];
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  billingZip: string;
  getCardType: FunctionComponent;
  customErrorMessages: {
    onlyAllowedCards: string;
    invalidCardNumber: string;
    invalidExpirationDate: string;
    invalidCVV: string;
    invalidBillingZip: string;
  };
}
interface Rules {
  validateRequired: ValidateRequiredObj;
  ValidateMinMax: ValidateMinMaxObj;
  ValidateEmail: ValidateEmailObj;
  ValidatePattern: ValidatePatternObj;
  ValidatePhone: ValidatePhoneObj;
  ValidateNumber: ValidateNumberObj;
  ValidateInteger: ValidateIntegerObj;
  ValidateFloat: ValidateFloatObj;
  ValidateDate: ValidateDateObj;
  ValidateTime: ValidateTimeObj;
  ValidateUrl: ValidateUrlObj;
  ValidateCreditCard: ValidateCreditCardObj;
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  rules: Rules;
  errorElement: string;
  onSubmit: FunctionComponent;
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
    let { rules, onSubmit } = this.props;
    let { errorElement } = this.props;
    let allowedKeys: Array<keyof Rules> = [
      "validateRequired",
      "ValidateMinMax",
      "ValidateEmail",
      "ValidatePattern",
      "ValidatePhone",
      "ValidateNumber",
      "ValidateInteger",
      "ValidateFloat",
      "ValidateDate",
      "ValidateTime",
      "ValidateUrl",
      "ValidateCreditCard"
    ];

    let wrapper = document.getElementById("_validation_wrapper");
    let form = wrapper?.children[0] as HTMLFormElement;
    let submit_button =
      (form.querySelector('button[type="submit"]') as HTMLFormElement) ||
      (form.querySelector('input[type="submit"]') as HTMLFormElement);
    let errorText = document.querySelector(errorElement) as HTMLElement;
    let errorMessage = String;

    form.querySelectorAll("input").forEach((input, index) => {
      if (input.style.transition === "") {
        input.style.transition = "0.3s ease";
        input.style.transitionDelay = "0." + (index - 1) + "s";
      }
    });

    if (submit_button) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (errorText.innerHTML === "") {
          if (onSubmit) {
            onSubmit(e);
          } else {
            form.submit();
          }
        }
      });
    }

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
          emailPattern =
            /^(?!.*@(?:gmail|yahoo|hotmail|outlook)\.com$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
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

      const mobileRegex =
        /^(\+?254|0)?([17](0|1|[3-9])[0-9]{6}|([2-9]|[4-6][0-9])[0-9]{6,7})$/;
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
          } else {
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

          if (rules.ValidatePhone?.isLandlineNumber) {
            rules.ValidatePhone.isLandlineNumber(
              landlineRegex.test(phoneNumber)
            );
          }
          if (rules.ValidatePhone?.isMobileNumber) {
            rules.ValidatePhone.isMobileNumber(mobileRegex.test(phoneNumber));
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
          } else {
            if (invalid) {
              invalid();
            }
            if (errorText) {
              if (message) {
                errorText.innerText = message;
              }
            }
          }

          if (rules.ValidatePhone?.isLandlineNumber) {
            rules.ValidatePhone.isLandlineNumber(
              landlineRegex.test(phoneNumber)
            );
          }
          if (rules.ValidatePhone?.isMobileNumber) {
            rules.ValidatePhone.isMobileNumber(mobileRegex.test(phoneNumber));
          }
        });
      }
    };

    const runValidateNumber = () => {
      let min = rules.ValidateNumber?.min;
      let max = rules.ValidateNumber?.max;
      let inputName = rules.ValidateNumber?.input;
      let when = rules.ValidateNumber?.when;
      let decimalPlaces = rules.ValidateNumber?.decimalPlaces;
      let allowNegative = rules.ValidateNumber?.allowNegative;
      let integersOnly = rules.ValidateNumber?.integersOnly;
      let base = rules.ValidateNumber?.base;
      let customErrorMessages = rules.ValidateNumber?.customErrorMessages;
      let inputElement = form.querySelector(
        `input[name='${inputName}']`
      ) as HTMLInputElement;
      let errorMessage: string | undefined;
      let onsuccess = rules.ValidateNumber?.onsuccess;
      let invalid = rules.ValidateNumber?.invalid;

      if (when === "onblur") {
        inputElement.addEventListener("blur", () => {
          errorMessage = undefined;
          if (errorText) {
            errorText.innerText = "";
          }
          let input = inputElement.value;
          let num = Number(input);

          // If the input is not a valid number, return an error message
          if (isNaN(num)) {
            return {
              isValid: false,
              errorMessage:
                customErrorMessages?.invalidNumber || "Invalid number",
            };
          }

          // Check if the number is within the specified range
          if (
            (min !== undefined && num < min) ||
            (max !== undefined && num > max)
          ) {
            errorMessage =
              customErrorMessages?.range ||
              `Number must be between ${min} and ${max}`;
          }

          // Check if the number has the specified number of decimal places
          if (decimalPlaces !== undefined) {
            const numStr = num.toString();
            const decimalIndex = numStr.indexOf(".");
            const numDecimalPlaces =
              decimalIndex !== -1 ? numStr.length - decimalIndex - 1 : 0;
            if (numDecimalPlaces > decimalPlaces) {
              errorMessage =
                customErrorMessages?.decimalPlaces ||
                `Number must have no more than ${decimalPlaces} decimal places`;
            }
          }

          // Check if the number is negative (if negative numbers are not allowed)
          if (!allowNegative && num < 0) {
            errorMessage =
              customErrorMessages?.negative ||
              "Negative numbers are not allowed";
          }

          // Check if the number is not an integer (if integers only are required)
          if (integersOnly && !Number.isInteger(num)) {
            errorMessage =
              customErrorMessages?.integersOnly || "Only integers are allowed";
          }

          // Check if the number is in the specified base (if a base is specified)
          if (base !== undefined) {
            const parsedNum = parseInt(input as string, base);
            if (isNaN(parsedNum)) {
              errorMessage =
                customErrorMessages?.base || `Number must be in base ${base}`;
            }
          }

          // If no error message was set, the validation passed

          if (errorMessage === undefined) {
            if (onsuccess) {
              onsuccess(inputElement);
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
            if (invalid) {
              invalid();
            }
            if (errorText) {
              if (errorMessage) {
                errorText.innerText = errorMessage;
              }
            }
          }
        });
      } else if (when === "typing") {
        inputElement.addEventListener("input", () => {
          errorMessage = undefined;

          let input = inputElement.value;
          let num = Number(input);

          // If the input is not a valid number, return an error message
          if (isNaN(num)) {
            return {
              isValid: false,
              errorMessage:
                customErrorMessages?.invalidNumber || "Invalid number",
            };
          }

          // Check if the number is within the specified range
          if (
            (min !== undefined && num < min) ||
            (max !== undefined && num > max)
          ) {
            errorMessage =
              customErrorMessages?.range ||
              `Number must be between ${min} and ${max}`;
          }

          // Check if the number has the specified number of decimal places
          if (decimalPlaces !== undefined) {
            const numStr = num.toString();
            const decimalIndex = numStr.indexOf(".");
            const numDecimalPlaces =
              decimalIndex !== -1 ? numStr.length - decimalIndex - 1 : 0;
            if (numDecimalPlaces > decimalPlaces) {
              errorMessage =
                customErrorMessages?.decimalPlaces ||
                `Number must have no more than ${decimalPlaces} decimal places`;
            }
          }

          // Check if the number is negative (if negative numbers are not allowed)
          if (!allowNegative && num < 0) {
            errorMessage =
              customErrorMessages?.negative ||
              "Negative numbers are not allowed";
          }

          // Check if the number is not an integer (if integers only are required)
          if (integersOnly && !Number.isInteger(num)) {
            errorMessage =
              customErrorMessages?.integersOnly || "Only integers are allowed";
          }

          // Check if the number is in the specified base (if a base is specified)
          if (base !== undefined) {
            const parsedNum = parseInt(input as string, base);
            if (isNaN(parsedNum)) {
              errorMessage =
                customErrorMessages?.base || `Number must be in base ${base}`;
            }
          }

          // If no error message was set, the validation passed

          if (errorMessage == undefined) {
            if (onsuccess) {
              onsuccess(inputElement);
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
            if (invalid) {
              invalid();
            }
            if (errorText) {
              if (errorMessage) {
                errorText.innerText = errorMessage;
              }
            }
          }
        });
      }
    };

    const runValidateInteger = () => {
      let when = rules.ValidateInteger?.when;
      let input = rules.ValidateInteger?.input;
      let minValue = rules.ValidateInteger?.minValue;
      let maxValue = rules.ValidateInteger?.maxValue;
      let uniqueValues = rules.ValidateInteger?.uniqueValues;
      let positiveOnly = rules.ValidateInteger?.positiveOnly;
      let evenOnly = rules.ValidateInteger?.evenOnly;
      let divisibleBy = rules.ValidateInteger?.divisibleBy;
      let invalid = rules.ValidateInteger?.invalid;
      let customErrorMessages = rules.ValidateInteger?.customErrorMessages;

      let inputElement = form.querySelector(
        `input[name="${input}"]`
      ) as HTMLInputElement;

      if (when === "onblur") {
        inputElement.addEventListener("blur", () => {
          let value = Number(inputElement.value);

          if (errorText) {
            errorText.innerText = "";
          }
          if (inputElement.style.border) {
            inputElement.style.borderColor = "";
          } else {
            inputElement.style.border = "";
          }

          const errorMessage = {
            ...customErrorMessages,
            notANumber: "The value must be a number",
            notAnInteger: "The value must be an integer",
            outOfRange: `The value must be between ${minValue} and ${maxValue}`,
            notUnique: "The value must be unique",
            notPositive: "The value must be positive",
            notEven: "The value must be even",
            notDivisible: `The value must be divisible by ${divisibleBy}`,
          };

          // Check that the input value is actually a number
          if (typeof value !== "number" || isNaN(value)) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (invalid) {
              invalid();
            }
            if (errorText) {
              if (errorMessage) {
                errorText.innerText = errorMessage.notANumber;
              }
            }
          }

          // Check that the input value is an integer
          if (!Number.isInteger(value)) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (invalid) {
              invalid();
            }
            if (errorText) {
              if (errorMessage) {
                errorText.innerText = errorMessage.notAnInteger;
              }
            }
          }

          // Check that the input value is within the specified range (if provided)
          if (
            (minValue !== undefined && value < minValue) ||
            (maxValue !== undefined && value > maxValue)
          ) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (invalid) {
              invalid();
            }
            if (errorText) {
              if (errorMessage) {
                errorText.innerText = errorMessage.outOfRange;
              }
            }
          }

          // Check that the input value is unique (if required)
          if (uniqueValues !== undefined && uniqueValues.includes(value)) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (invalid) {
              invalid();
            }
            if (errorText) {
              if (errorMessage) {
                errorText.innerText = errorMessage.notUnique;
              }
            }
          }

          // Check that the input value is positive (if required)
          if (positiveOnly !== undefined && positiveOnly && value <= 0) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (invalid) {
              invalid();
            }
            if (errorText) {
              if (errorMessage) {
                errorText.innerText = errorMessage.notPositive;
              }
            }
          }

          // Check that the input value is even (if required)
          if (evenOnly !== undefined && evenOnly && value % 2 !== 0) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (invalid) {
              invalid();
            }
            if (errorText) {
              if (errorMessage) {
                errorText.innerText = errorMessage.notEven;
              }
            }
          }

          // Check that the input value is divisible by a certain number (if required)
          if (divisibleBy !== undefined && value % divisibleBy !== 0) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (invalid) {
              invalid();
            }
            if (errorText) {
              if (errorMessage) {
                errorText.innerText = errorMessage.notDivisible;
              }
            }
          }
        });
      } else if (when === "typing") {
        inputElement.addEventListener("input", () => {
          let value = Number(inputElement.value);

          if (errorText) {
            errorText.innerText = "";
          }
          if (inputElement.style.border) {
            inputElement.style.borderColor = "";
          } else {
            inputElement.style.border = "";
          }

          const errorMessage = {
            ...customErrorMessages,
            notANumber: "The value must be a number",
            notAnInteger: "The value must be an integer",
            outOfRange: `The value must be between ${minValue} and ${maxValue}`,
            notUnique: "The value must be unique",
            notPositive: "The value must be positive",
            notEven: "The value must be even",
            notDivisible: `The value must be divisible by ${divisibleBy}`,
          };

          // Check that the input value is actually a number
          if (typeof value !== "number" || isNaN(value)) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (invalid) {
              invalid();
            }
            if (errorText) {
              if (errorMessage) {
                errorText.innerText = errorMessage.notANumber;
              }
            }
          }

          // Check that the input value is an integer
          if (!Number.isInteger(value)) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (invalid) {
              invalid();
            }
            if (errorText) {
              if (errorMessage) {
                errorText.innerText = errorMessage.notAnInteger;
              }
            }
          }

          // Check that the input value is within the specified range (if provided)
          if (
            (minValue !== undefined && value < minValue) ||
            (maxValue !== undefined && value > maxValue)
          ) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (invalid) {
              invalid();
            }
            if (errorText) {
              if (errorMessage) {
                errorText.innerText = errorMessage.outOfRange;
              }
            }
          }

          // Check that the input value is unique (if required)
          if (uniqueValues !== undefined && uniqueValues.includes(value)) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (invalid) {
              invalid();
            }
            if (errorText) {
              if (errorMessage) {
                errorText.innerText = errorMessage.notUnique;
              }
            }
          }

          // Check that the input value is positive (if required)
          if (positiveOnly !== undefined && positiveOnly && value <= 0) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (invalid) {
              invalid();
            }
            if (errorText) {
              if (errorMessage) {
                errorText.innerText = errorMessage.notPositive;
              }
            }
          }

          // Check that the input value is even (if required)
          if (evenOnly !== undefined && evenOnly && value % 2 !== 0) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (invalid) {
              invalid();
            }
            if (errorText) {
              if (errorMessage) {
                errorText.innerText = errorMessage.notEven;
              }
            }
          }

          // Check that the input value is divisible by a certain number (if required)
          if (divisibleBy !== undefined && value % divisibleBy !== 0) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (invalid) {
              invalid();
            }
            if (errorText) {
              if (errorMessage) {
                errorText.innerText = errorMessage.notDivisible;
              }
            }
          }
        });
      }
    };

    const runValidateFloat = () => {
      let when = rules.ValidateFloat?.when;
      let input = rules.ValidateFloat?.input;
      let customErrorMessages = rules.ValidateFloat?.customErrorMessages;

      let inputElement = form.querySelector(
        `input[name="${input}"]`
      ) as HTMLInputElement;

      const defaultErrorMessages = {
        required: "This field is required",
        invalid: "Please enter a valid number",
        min: `Please enter a number greater than or equal to ${rules.ValidateFloat?.min}`,
        max: `Please enter a number less than or equal to ${rules.ValidateFloat?.max}`,
        precision: `Please enter a number with at most ${rules.ValidateFloat?.precision} decimal places`,
        ...customErrorMessages,
      };
      const errorMessages = defaultErrorMessages;

      if (when === "onblur") {
        inputElement.addEventListener("blur", () => {
          if (errorText) {
            errorText.innerText = "";
          }
          if (inputElement.style.border) {
            inputElement.style.borderColor = "";
          } else {
            inputElement.style.border = "";
          }

          let value = inputElement.value;

          const isEmpty = !value.trim();
          if (rules.ValidateFloat?.required && isEmpty) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (errorText) {
              if (errorMessages) {
                errorText.innerText = errorMessages.required!;
              }
            }
          }

          const numberValue = parseFloat(value);
          if (isNaN(numberValue) || !isFinite(numberValue)) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (errorText) {
              if (errorMessages) {
                errorText.innerText = errorMessages.invalid!;
              }
            }
          }

          if (
            rules.ValidateFloat?.min !== undefined &&
            numberValue < rules.ValidateFloat.min
          ) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (errorText) {
              if (errorMessages) {
                errorText.innerText = errorMessages.min!;
              }
            }
          }

          if (
            rules.ValidateFloat?.max !== undefined &&
            numberValue > rules.ValidateFloat.max
          ) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (errorText) {
              if (errorMessages) {
                errorText.innerText = errorMessages.max!;
              }
            }
          }

          if (rules.ValidateFloat?.precision !== undefined) {
            const parts = value.split(".");
            if (
              parts.length === 2 &&
              parts[1].length > rules.ValidateFloat.precision
            ) {
              if (inputElement.style.border) {
                inputElement.style.borderColor = "red";
              } else {
                inputElement.style.border = "1px solid red";
              }
              if (errorText) {
                if (errorMessages) {
                  errorText.innerText = errorMessages.precision!;
                }
              }
            }
          }
        });
      } else if (when === "typing") {
        inputElement.addEventListener("input", () => {
          let value = inputElement.value;
          if (errorText) {
            errorText.innerText = "";
          }
          if (inputElement.style.border) {
            inputElement.style.borderColor = "";
          } else {
            inputElement.style.border = "";
          }

          const isEmpty = !value.trim();
          if (rules.ValidateFloat?.required && isEmpty) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (errorText) {
              if (errorMessages) {
                errorText.innerText = errorMessages.required!;
              }
            }
          }

          const numberValue = parseFloat(value);
          if (isNaN(numberValue) || !isFinite(numberValue)) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (errorText) {
              if (errorMessages) {
                errorText.innerText = errorMessages.invalid!;
              }
            }
          }

          if (
            rules.ValidateFloat?.min !== undefined &&
            numberValue < rules.ValidateFloat.min
          ) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (errorText) {
              if (errorMessages) {
                errorText.innerText = errorMessages.min!;
              }
            }
          }

          if (
            rules.ValidateFloat?.max !== undefined &&
            numberValue > rules.ValidateFloat.max
          ) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (errorText) {
              if (errorMessages) {
                errorText.innerText = errorMessages.max!;
              }
            }
          }

          if (rules.ValidateFloat?.precision !== undefined) {
            const parts = value.split(".");
            if (
              parts.length === 2 &&
              parts[1].length > rules.ValidateFloat.precision
            ) {
              if (inputElement.style.border) {
                inputElement.style.borderColor = "red";
              } else {
                inputElement.style.border = "1px solid red";
              }
              if (errorText) {
                if (errorMessages) {
                  errorText.innerText = errorMessages.precision!;
                }
              }
            }
          }
        });
      }
    };

    const runValidateDate = () => {
      let when = rules.ValidateDate?.when;
      let inputValue = rules.ValidateDate?.input;
      let minDate = rules.ValidateDate?.minDate;
      let maxDate = rules.ValidateDate?.maxDate;
      let allowOnlyBusinessDay = rules.ValidateDate?.allowOnlyBusinessDay;
      let allowOnlyWeekend = rules.ValidateDate?.allowOnlyWeekend;
      let customFormat = rules.ValidateDate?.customFormat;
      let timeZone = rules.ValidateDate?.timeZone;
      let customErrorMessages = rules.ValidateDate?.customErrorMessages;
      let inputElement = form.querySelector(
        `input[name="${inputValue}"]`
      ) as HTMLInputElement;

      function isBusinessDayCheck(date: Date): boolean {
        // assuming weekends are Saturday (6) and Sunday (0)
        const dayOfWeek = date.getDay();
        return dayOfWeek !== 0 && dayOfWeek !== 6;
      }

      function isWeekendCheck(date: Date): boolean {
        const dayOfWeek = date.getDay();
        return dayOfWeek === 0 || dayOfWeek === 6;
      }

      const defaultErrorMessages = {
        invalidDate: "Invalid date format",
        minDate: `The date must be on or after ${rules.ValidateDate?.minDate?.toLocaleDateString()}`,
        maxDate: `The date must be on or before ${rules.ValidateDate?.maxDate?.toLocaleDateString()}`,
        businessDay: "Date is not a business day",
        notWeekend: "Date is not a weekend",
        invalidFormat: "Date is not in the expected format",
        invalidTimeZone: "Time zone is not valid",
      };

      const errorMessages = {
        ...customErrorMessages,
        ...defaultErrorMessages,
      };

      if (when === "typing") {
        inputElement.addEventListener("input", () => {
          if (errorText) {
            errorText.innerText = "";
          }
          if (inputElement.style.border) {
            inputElement.style.borderColor = "";
          } else {
            inputElement.style.border = "";
          }

          let input = inputElement.value;
          const inputDate = new Date(input);

          if (isNaN(inputDate.getTime())) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (errorText) {
              if (errorMessages) {
                errorText.innerText = errorMessages.invalidDate!;
              }
            }
          }

          if (minDate && inputDate < minDate) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (errorText) {
              if (errorMessages) {
                errorText.innerText = errorMessages.minDate!;
              }
            }
          }

          if (maxDate && inputDate > maxDate) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (errorText) {
              if (errorMessages) {
                errorText.innerText = errorMessages.maxDate!;
              }
            }
          }

          if (allowOnlyBusinessDay && !isBusinessDayCheck(inputDate)) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (errorText) {
              if (errorMessages) {
                errorText.innerText = errorMessages.businessDay!;
              }
            }
          }

          if (allowOnlyWeekend && !isWeekendCheck(inputDate)) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (errorText) {
              if (errorMessages) {
                errorText.innerText = errorMessages.notWeekend!;
              }
            }
          }

          if (timeZone) {
            try {
              const formatter = new Intl.DateTimeFormat("en-US", {
                timeZone,
                ...(customFormat && { dateStyle: "short", timeStyle: "short" }),
              });
              formatter.format(inputDate);
            } catch (error) {
              if (inputElement.style.border) {
                inputElement.style.borderColor = "red";
              } else {
                inputElement.style.border = "1px solid red";
              }
              if (errorText) {
                if (errorMessages) {
                  errorText.innerText = errorMessages.invalidTimeZone!;
                }
              }
            }
          }
        });
      } else if (when === "onblur") {
        inputElement.addEventListener("blur", () => {
          if (errorText) {
            errorText.innerText = "";
          }
          if (inputElement.style.border) {
            inputElement.style.borderColor = "";
          } else {
            inputElement.style.border = "";
          }

          let input = inputElement.value;
          const inputDate = new Date(input);

          if (isNaN(inputDate.getTime())) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (errorText) {
              if (errorMessages) {
                errorText.innerText = errorMessages.invalidDate!;
              }
            }
          }

          if (minDate && inputDate < minDate) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (errorText) {
              if (errorMessages) {
                errorText.innerText = errorMessages.minDate!;
              }
            }
          }

          if (maxDate && inputDate > maxDate) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (errorText) {
              if (errorMessages) {
                errorText.innerText = errorMessages.maxDate!;
              }
            }
          }

          if (allowOnlyBusinessDay && !isBusinessDayCheck(inputDate)) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (errorText) {
              if (errorMessages) {
                errorText.innerText = errorMessages.businessDay!;
              }
            }
          }

          if (allowOnlyWeekend && !isWeekendCheck(inputDate)) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (errorText) {
              if (errorMessages) {
                errorText.innerText = errorMessages.notWeekend!;
              }
            }
          }

          if (timeZone) {
            try {
              const formatter = new Intl.DateTimeFormat("en-US", {
                timeZone,
                ...(customFormat && { dateStyle: "short", timeStyle: "short" }),
              });
              formatter.format(inputDate);
            } catch (error) {
              if (inputElement.style.border) {
                inputElement.style.borderColor = "red";
              } else {
                inputElement.style.border = "1px solid red";
              }
              if (errorText) {
                if (errorMessages) {
                  errorText.innerText = errorMessages.invalidTimeZone!;
                }
              }
            }
          }
        });
      }
    };

    const runValidateTime = () => {
      const {
        when,
        input,
        customErrorMessages,
        timeRange,
        timeInterval,
        timezone,
      } = rules.ValidateTime;

      const defaultErrorMessages = {
        invalidFormat: "Invalid time format",
        invalidRange: "Time is out of range",
        invalidTimezone: "Invalid timezone",
        invalidInterval: "Time is not within the specified interval",
      };

      const errorMessages = {
        ...customErrorMessages,
        ...defaultErrorMessages,
      };

      const inputElement = form.querySelector(
        `input[name="${input}"]`
      ) as HTMLInputElement;

      if (when === "typing") {
        inputElement.addEventListener("input", () => {
          if (errorText) {
            errorText.innerText = "";
          }
          if (inputElement.style.border) {
            inputElement.style.borderColor = "";
          } else {
            inputElement.style.border = "";
          }

          let timeString = inputElement.value;

          // Helper function to pad a number with leading zeros
          function pad(num: number): string {
            const str = num.toString();
            return str.length === 1 ? "0" + str : str;
          }

          // Check for valid time format
          if (
            !timeString.match(/^([0-1][0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/)
          ) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (errorText) {
              if (errorMessages) {
                errorText.innerText = errorMessages.invalidFormat!;
              }
            }
          }

          // Check for valid time range
          const timeParts = timeString
            .split(":")
            .map((part) => parseInt(part, 10));
          const hours = timeParts[0];
          const minutes = timeParts[1];
          const seconds = timeParts[2] || 0;
          if (
            hours < 0 ||
            hours > 23 ||
            minutes < 0 ||
            minutes > 59 ||
            seconds < 0 ||
            seconds > 59
          ) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (errorText) {
              if (errorMessages) {
                errorText.innerText = errorMessages.invalidRange!;
              }
            }
          }

          // Check if the time string falls within a specified time range
          if (timeRange !== undefined) {
            const startTime = new Date(`2022-01-01T${timeRange.startTime}`);
            const endTime = new Date(`2022-01-01T${timeRange.endTime}`);
            const time = new Date(`2022-01-01T${timeString}`);
            if (time < startTime || time > endTime) {
              if (inputElement.style.border) {
                inputElement.style.borderColor = "red";
              } else {
                inputElement.style.border = "1px solid red";
              }
              if (errorText) {
                if (errorMessages) {
                  errorText.innerText =
                    "Time is outside of the specified range!";
                }
              }
            }
          }

          // Check if the time string falls within a specified interval
          if (timeInterval !== undefined) {
            const timeParts = timeString
              .split(":")
              .map((part) => parseInt(part, 10));
            const totalMinutes = timeParts[0] * 60 + timeParts[1];
            if (
              totalMinutes < timeInterval.startInterval ||
              totalMinutes > timeInterval.endInterval
            ) {
              if (inputElement.style.border) {
                inputElement.style.borderColor = "red";
              } else {
                inputElement.style.border = "1px solid red";
              }
              if (errorText) {
                if (errorMessages) {
                  errorText.innerText = errorMessages.invalidInterval;
                }
              }
            }
          }
        });
      } else if (when === "onblur") {
        inputElement.addEventListener("blur", () => {
          let timeString = inputElement.value;

          if (errorText) {
            errorText.innerText = "";
          }
          if (inputElement.style.border) {
            inputElement.style.borderColor = "";
          } else {
            inputElement.style.border = "";
          }

          // Helper function to pad a number with leading zeros
          function pad(num: number): string {
            const str = num.toString();
            return str.length === 1 ? "0" + str : str;
          }

          // Check for valid time format
          if (
            !timeString.match(/^([0-1][0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/)
          ) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (errorText) {
              if (errorMessages) {
                errorText.innerText = errorMessages.invalidFormat!;
              }
            }
          }

          // Check for valid time range
          const timeParts = timeString
            .split(":")
            .map((part) => parseInt(part, 10));
          const hours = timeParts[0];
          const minutes = timeParts[1];
          const seconds = timeParts[2] || 0;
          if (
            hours < 0 ||
            hours > 23 ||
            minutes < 0 ||
            minutes > 59 ||
            seconds < 0 ||
            seconds > 59
          ) {
            if (inputElement.style.border) {
              inputElement.style.borderColor = "red";
            } else {
              inputElement.style.border = "1px solid red";
            }
            if (errorText) {
              if (errorMessages) {
                errorText.innerText = errorMessages.invalidRange!;
              }
            }
          }

          // Check if the time string falls within a specified time range
          if (timeRange !== undefined) {
            const startTime = new Date(`2022-01-01T${timeRange.startTime}`);
            const endTime = new Date(`2022-01-01T${timeRange.endTime}`);
            const time = new Date(`2022-01-01T${timeString}`);
            if (time < startTime || time > endTime) {
              if (inputElement.style.border) {
                inputElement.style.borderColor = "red";
              } else {
                inputElement.style.border = "1px solid red";
              }
              if (errorText) {
                if (errorMessages) {
                  errorText.innerText =
                    "Time is outside of the specified range!";
                }
              }
            }
          }

          // Check if the time string falls within a specified interval
          if (timeInterval !== undefined) {
            const timeParts = timeString
              .split(":")
              .map((part) => parseInt(part, 10));
            const totalMinutes = timeParts[0] * 60 + timeParts[1];
            if (
              totalMinutes < timeInterval.startInterval ||
              totalMinutes > timeInterval.endInterval
            ) {
              if (inputElement.style.border) {
                inputElement.style.borderColor = "red";
              } else {
                inputElement.style.border = "1px solid red";
              }
              if (errorText) {
                if (errorMessages) {
                  errorText.innerText = errorMessages.invalidInterval;
                }
              }
            }
          }
        });
      }
    };

    const runValidateUrl = () => {
      const when = rules.ValidateUrl.when;
      const input = rules.ValidateUrl.input;
      const customErrorMessages = rules.ValidateUrl.CustomErrorMessages;
      const checkUrl = rules.ValidateUrl.checkUrl;
      const checkProtocol = rules.ValidateUrl.checkProtocol;
      const checkDomain = rules.ValidateUrl.checkDomain;
      const checkIpAddress = rules.ValidateUrl.checkIpAddress;
      const checkInAccessibleUrl = rules.ValidateUrl.checkAccessibleUrl;
      const checkCharacters = rules.ValidateUrl.checkCharacters;
      const protocols = rules.ValidateUrl.protocols;

      const inputElement = form.querySelector(
        `input[name="${input}"]`
      ) as HTMLInputElement;

      const defaultErrorMessages = {
        invalidUrl: "The URL is not well-formed",
        invalidProtocol: "The URL has an invalid protocol",
        invalidDomain: "The URL has an invalid domain name",
        invalidIpAddress: "The URL has an invalid IP address",
        inaccessibleUrl: "The URL is inaccessible",
        invalidCharacters: "The URL contains invalid characters",
        protocolNotAllowed: `The URL must use the ${protocols} protocol`,
      };
      const errorMessages = { ...customErrorMessages, ...defaultErrorMessages };

      if (when === "typing") {
        inputElement.addEventListener("input", () => {
          if (errorText) {
            errorText.innerText = "";
          }
          if (inputElement.style.border) {
            inputElement.style.borderColor = "";
          } else {
            inputElement.style.border = "";
          }

          let url = inputElement.value;

          const urlRegex =
            /^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(?::\d{1,5})?(?:\/\S*)?$/;

          if (checkUrl) {
            if (!urlRegex.test(url)) {
              if (inputElement.style.border) {
                inputElement.style.borderColor = "red";
              } else {
                inputElement.style.border = "1px solid red";
              }
              if (errorText) {
                if (errorMessages) {
                  errorText.innerText = errorMessages.invalidUrl!;
                }
              }
            }
          }

          try {
            const parsedUrl = new URL(url);

            if (protocols) {
              if (!protocols.includes(parsedUrl.protocol.replace(":", ""))) {
                if (inputElement.style.border) {
                  inputElement.style.borderColor = "red";
                } else {
                  inputElement.style.border = "1px solid red";
                }
                if (errorText) {
                  if (errorMessages) {
                    errorText.innerText = errorMessages.protocolNotAllowed!;
                  }
                }
              }
            }

            if (checkProtocol) {
              if (!["http:", "https:", "ftp:"].includes(parsedUrl.protocol)) {
                if (inputElement.style.border) {
                  inputElement.style.borderColor = "red";
                } else {
                  inputElement.style.border = "1px solid red";
                }
                if (errorText) {
                  if (errorMessages) {
                    errorText.innerText = errorMessages.invalidProtocol!;
                  }
                }
              }
            }

            if (checkDomain) {
              if (!/^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(parsedUrl.hostname)) {
                if (inputElement.style.border) {
                  inputElement.style.borderColor = "red";
                } else {
                  inputElement.style.border = "1px solid red";
                }
                if (errorText) {
                  if (errorMessages) {
                    errorText.innerText = errorMessages.invalidDomain!;
                  }
                }
              }
            }

            if (checkIpAddress) {
              if (
                parsedUrl.hostname.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)
              ) {
                const octets = parsedUrl.hostname.split(".");
                if (octets.some((octet) => parseInt(octet) > 255)) {
                  if (inputElement.style.border) {
                    inputElement.style.borderColor = "red";
                  } else {
                    inputElement.style.border = "1px solid red";
                  }
                  if (errorText) {
                    if (errorMessages) {
                      errorText.innerText = errorMessages.invalidIpAddress!;
                    }
                  }
                }
              }
            }

            if (checkInAccessibleUrl) {
              fetch(url).then((response) => {
                if (!response.ok) {
                  if (inputElement.style.border) {
                    inputElement.style.borderColor = "red";
                  } else {
                    inputElement.style.border = "1px solid red";
                  }
                  if (errorText) {
                    if (errorMessages) {
                      errorText.innerText = errorMessages.inaccessibleUrl!;
                    }
                  }
                }
              });
            }
          } catch (err) {
            if (checkUrl) {
              if (inputElement.style.border) {
                inputElement.style.borderColor = "red";
              } else {
                inputElement.style.border = "1px solid red";
              }
              if (errorText) {
                if (errorMessages) {
                  errorText.innerText = errorMessages.invalidUrl!;
                }
              }
            }
          }

          if (checkCharacters) {
            if (/[ <>]/.test(url)) {
              if (inputElement.style.border) {
                inputElement.style.borderColor = "red";
              } else {
                inputElement.style.border = "1px solid red";
              }
              if (errorText) {
                if (errorMessages) {
                  errorText.innerText = errorMessages.invalidCharacters!;
                }
              }
            }
          }
        });
      } else if (when === "onblur") {
        inputElement.addEventListener("blur", () => {
          if (errorText) {
            errorText.innerText = "";
          }
          if (inputElement.style.border) {
            inputElement.style.borderColor = "";
          } else {
            inputElement.style.border = "";
          }

          let url = inputElement.value;

          const urlRegex =
            /^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(?::\d{1,5})?(?:\/\S*)?$/;

          if (checkUrl) {
            if (!urlRegex.test(url)) {
              if (inputElement.style.border) {
                inputElement.style.borderColor = "red";
              } else {
                inputElement.style.border = "1px solid red";
              }
              if (errorText) {
                if (errorMessages) {
                  errorText.innerText = errorMessages.invalidUrl!;
                }
              }
            }
          }

          try {
            const parsedUrl = new URL(url);

            if (protocols) {
              if (!protocols.includes(parsedUrl.protocol.replace(":", ""))) {
                if (inputElement.style.border) {
                  inputElement.style.borderColor = "red";
                } else {
                  inputElement.style.border = "1px solid red";
                }
                if (errorText) {
                  if (errorMessages) {
                    errorText.innerText = errorMessages.protocolNotAllowed!;
                  }
                }
              }
            }

            if (checkProtocol) {
              if (!["http:", "https:", "ftp:"].includes(parsedUrl.protocol)) {
                if (inputElement.style.border) {
                  inputElement.style.borderColor = "red";
                } else {
                  inputElement.style.border = "1px solid red";
                }
                if (errorText) {
                  if (errorMessages) {
                    errorText.innerText = errorMessages.invalidProtocol!;
                  }
                }
              }
            }

            if (checkDomain) {
              if (!/^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(parsedUrl.hostname)) {
                if (inputElement.style.border) {
                  inputElement.style.borderColor = "red";
                } else {
                  inputElement.style.border = "1px solid red";
                }
                if (errorText) {
                  if (errorMessages) {
                    errorText.innerText = errorMessages.invalidDomain!;
                  }
                }
              }
            }

            if (checkIpAddress) {
              if (
                parsedUrl.hostname.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)
              ) {
                const octets = parsedUrl.hostname.split(".");
                if (octets.some((octet) => parseInt(octet) > 255)) {
                  if (inputElement.style.border) {
                    inputElement.style.borderColor = "red";
                  } else {
                    inputElement.style.border = "1px solid red";
                  }
                  if (errorText) {
                    if (errorMessages) {
                      errorText.innerText = errorMessages.invalidIpAddress!;
                    }
                  }
                }
              }
            }

            if (checkInAccessibleUrl) {
              fetch(url).then((response) => {
                if (!response.ok) {
                  if (inputElement.style.border) {
                    inputElement.style.borderColor = "red";
                  } else {
                    inputElement.style.border = "1px solid red";
                  }
                  if (errorText) {
                    if (errorMessages) {
                      errorText.innerText = errorMessages.inaccessibleUrl!;
                    }
                  }
                }
              });
            }
          } catch (err) {
            if (checkUrl) {
              if (inputElement.style.border) {
                inputElement.style.borderColor = "red";
              } else {
                inputElement.style.border = "1px solid red";
              }
              if (errorText) {
                if (errorMessages) {
                  errorText.innerText = errorMessages.invalidUrl!;
                }
              }
            }
          }

          if (checkCharacters) {
            if (/[ <>]/.test(url)) {
              if (inputElement.style.border) {
                inputElement.style.borderColor = "red";
              } else {
                inputElement.style.border = "1px solid red";
              }
              if (errorText) {
                if (errorMessages) {
                  errorText.innerText = errorMessages.invalidCharacters!;
                }
              }
            }
          }
        });
      }
    };

    const runValidateCreditCard = () => {
      const when = rules.ValidateCreditCard?.when;
      const allowedCards = rules.ValidateCreditCard?.allowedCards;
      const cardNumberValue = rules.ValidateCreditCard?.cardNumber;
      const expirationDateValue = rules.ValidateCreditCard?.expirationDate;
      const cvvValue = rules.ValidateCreditCard?.cvv;
      const billingZipValue = rules.ValidateCreditCard?.billingZip;
      const customErrorMessages = rules.ValidateCreditCard?.customErrorMessages;
      const getCardType = rules.ValidateCreditCard?.getCardType;

      let cardNumberElement = form.querySelector(
        `input[name="${cardNumberValue}"]`
      ) as HTMLInputElement;
      let expirationDateElement = form.querySelector(
        `input[name="${expirationDateValue}"]`
      ) as HTMLInputElement;
      let cvvElement = form.querySelector(
        `input[name="${cvvValue}"]`
      ) as HTMLInputElement;
      let billingZipElement = form.querySelector(
        `input[name="${billingZipValue}"]`
      ) as HTMLInputElement;

      const defaultErrorMessages = {
        invalidCardNumber: "Invalid credit card number",
        onlyAllowedCards: `Only ${allowedCards}  are allowed`,
        invalidExpirationDate: "Invalid expiration date",
        invalidCVV: "Invalid CVV code",
        invalidBillingZip: "Invalid billing zip code",
      };

      const errorMessages = {
        ...customErrorMessages,
        ...defaultErrorMessages,
      };

      function GetCardType(cardNumber: string): string {
        // This function determines the card type based on the first digits of the card number
        // You can implement your own logic to determine the card type
        // Here's an example implementation that supports Visa, Mastercard, American Express, and Discover cards:
        if (/^4/.test(cardNumber)) {
          return "Visa";
        } else if (/^5[1-5]/.test(cardNumber)) {
          return "Mastercard";
        } else if (/^3[47]/.test(cardNumber)) {
          return "American Express";
        } else if (/^6(?:011|5)/.test(cardNumber)) {
          return "Discover";
        } else {
          return "Unknown";
        }
      }

      function isValidCreditCardNumber(cardNumber: string): boolean {
        // This function uses the Luhn algorithm to validate the credit card number
        // You can find more information about the algorithm here: https://en.wikipedia.org/wiki/Luhn_algorithm
        const strippedCardNumber = cardNumber.replace(/\D/g, "");
        let sum = 0;
        let shouldDouble = false;
        for (let i = strippedCardNumber.length - 1; i >= 0; i--) {
          let digit = parseInt(strippedCardNumber.charAt(i), 10);
          if (shouldDouble) {
            if ((digit *= 2) > 9) digit -= 9;
          }
          sum += digit;
          shouldDouble = !shouldDouble;
        }
        return sum % 10 === 0 && sum > 0;
      }

      function isValidCreditCardExpirationDate(
        expirationDate: string
      ): boolean {
        // This function validates the expiration date of the credit card
        // The expiration date should be in the format "MM/YY"
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;

        const [expirationMonth, expirationYear] = expirationDate.split("/");
        const expMonth = parseInt(expirationMonth, 10);
        const expYear = parseInt(expirationYear, 10) + 2000;

        // Check that the expiration date is in the future
        if (
          expYear > currentYear ||
          (expYear === currentYear && expMonth >= currentMonth)
        ) {
          return true;
        }

        return false;
      }

      function isValidCreditCardCVV(cvv: string): boolean {
        // This function validates the CVV code of the credit card
        // You can implement your own validation logic based on your requirements
        const strippedCVV = cvv.replace(/\D/g, "");
        return /^[0-9]{3,4}$/.test(strippedCVV);
      }

      function isValidCreditCardBillingZip(billingZip: string): boolean {
        // This function validates the billing zip code of the credit card
        // You can implement your own validation logic based on your requirements
        const strippedBillingZip = billingZip.replace(/\D/g, "");
        return /^[0-9]{5}(?:-[0-9]{4})?$/.test(strippedBillingZip);
      }

      const checkCardNumber = (cardNumber: string) => {
        // Validate the credit card number
        const isValidCardNumber = isValidCreditCardNumber(cardNumber);
        if (!isValidCardNumber) {
          const errorMessage = errorMessages.invalidCardNumber;
          return errorMessage;
        } else {
          return "";
        }
      };

      const checkCardType = (cardNumber: string) => {
        const cardType = GetCardType(cardNumber);
        // Check if the card type is allowed
        if (allowedCards) {
          if (allowedCards.length > 0 && !allowedCards.includes(cardType)) {
            const errorMessage = errorMessages.onlyAllowedCards;
            return errorMessage;
          } else {
            return "";
          }
        }
      };

      const checkExpirationDate = (expirationDate: string) => {
        // Validate the expiration date

        const isValidExpirationDate =
          isValidCreditCardExpirationDate(expirationDate);
        if (!isValidExpirationDate) {
          const errorMessage = errorMessages.invalidExpirationDate;
          return errorMessage;
        } else {
          return "";
        }
      };

      const checkCvv = (cvv: string) => {
        // Validate the CVV code
        const isValidCVV = isValidCreditCardCVV(cvv);
        if (!isValidCVV) {
          const errorMessage = errorMessages.invalidCVV;
          return errorMessage;
        } else {
          return "";
        }
      };

      const checkBillingZip = (billingZip: string) => {
        // Validate the billing zip code
        const isValidBillingZip = isValidCreditCardBillingZip(billingZip);
        if (!isValidBillingZip) {
          const errorMessage = errorMessages.invalidBillingZip;
          return errorMessage;
        } else {
          return "";
        }
      };

      if (when === "typing") {
        if (cardNumberElement) {
          cardNumberElement.addEventListener("input", () => {
            if (errorText) {
              errorText.innerText = "";
            }
            if (cardNumberElement.style.border) {
              cardNumberElement.style.borderColor = "";
            } else {
              cardNumberElement.style.border = "";
            }
            let value = cardNumberElement.value;
            if (checkCardNumber(value) !== "") {
              if (cardNumberElement.style.border) {
                cardNumberElement.style.borderColor = "red";
              } else {
                cardNumberElement.style.border = "1px solid red";
              }
              if (errorText) {
                errorText.innerText = checkCardNumber(value);
              }
            }

            if (allowedCards) {
              if (checkCardType(value) !== "") {
                if (cardNumberElement.style.border) {
                  cardNumberElement.style.borderColor = "red";
                } else {
                  cardNumberElement.style.border = "1px solid red";
                }
                if (errorText) {
                  errorText.innerText = checkCardType(value)!;
                }
              }
            }

            if(getCardType){
              getCardType(GetCardType(value));
            }
          });
        }

        if (expirationDateElement) {
          expirationDateElement.addEventListener("input", () => {
            if (errorText) {
              errorText.innerText = "";
            }
            if (expirationDateElement.style.border) {
              expirationDateElement.style.borderColor = "";
            } else {
              expirationDateElement.style.border = "";
            }
            let value = expirationDateElement.value;
            if (checkExpirationDate(value) !== "") {
              if (expirationDateElement.style.border) {
                expirationDateElement.style.borderColor = "red";
              } else {
                expirationDateElement.style.border = "1px solid red";
              }
              if (errorText) {
                errorText.innerText = checkExpirationDate(value);
              }
            }
          });
        }

        if (cvvElement) {
          cvvElement.addEventListener("input", () => {
            if (errorText) {
              errorText.innerText = "";
            }
            if (cvvElement.style.border) {
              cvvElement.style.borderColor = "";
            } else {
              cvvElement.style.border = "";
            }
            let value = cvvElement.value;
            if (checkCvv(value) !== "") {
              if (cvvElement.style.border) {
                cvvElement.style.borderColor = "red";
              } else {
                cvvElement.style.border = "1px solid red";
              }
              if (errorText) {
                errorText.innerText = checkCvv(value);
              }
            }
          });
        }

        if (billingZipElement) {
          billingZipElement.addEventListener("input", () => {
            if (errorText) {
              errorText.innerText = "";
            }
            if (billingZipElement.style.border) {
              billingZipElement.style.borderColor = "";
            } else {
              billingZipElement.style.border = "";
            }
            let value = billingZipElement.value;
            if (checkBillingZip(value) !== "") {
              if (billingZipElement.style.border) {
                billingZipElement.style.borderColor = "red";
              } else {
                billingZipElement.style.border = "1px solid red";
              }
              if (errorText) {
                errorText.innerText = checkBillingZip(value);
              }
            }
          });
        }
      } else if (when === "onblur") {
        if (cardNumberElement) {
          cardNumberElement.addEventListener("blur", () => {
            if (errorText) {
              errorText.innerText = "";
            }
            if (cardNumberElement.style.border) {
              cardNumberElement.style.borderColor = "";
            } else {
              cardNumberElement.style.border = "";
            }
            let value = cardNumberElement.value;
            if (checkCardNumber(value) !== "") {
              if (cardNumberElement.style.border) {
                cardNumberElement.style.borderColor = "red";
              } else {
                cardNumberElement.style.border = "1px solid red";
              }
              if (errorText) {
                errorText.innerText = checkCardNumber(value);
              }
            }

            if (allowedCards) {
              if (checkCardType(value) !== "") {
                if (cardNumberElement.style.border) {
                  cardNumberElement.style.borderColor = "red";
                } else {
                  cardNumberElement.style.border = "1px solid red";
                }
                if (errorText) {
                  errorText.innerText = checkCardType(value)!;
                }
              }
            }

            if(getCardType){
              getCardType(GetCardType(value));
            }
          });
        }

        if (expirationDateElement) {
          expirationDateElement.addEventListener("blur", () => {
            if (errorText) {
              errorText.innerText = "";
            }
            if (expirationDateElement.style.border) {
              expirationDateElement.style.borderColor = "";
            } else {
              expirationDateElement.style.border = "";
            }
            let value = expirationDateElement.value;
            if (checkExpirationDate(value) !== "") {
              if (expirationDateElement.style.border) {
                expirationDateElement.style.borderColor = "red";
              } else {
                expirationDateElement.style.border = "1px solid red";
              }
              if (errorText) {
                errorText.innerText = checkExpirationDate(value);
              }
            }
          });
        }

        if (cvvElement) {
          cvvElement.addEventListener("blur", () => {
            if (errorText) {
              errorText.innerText = "";
            }
            if (cvvElement.style.border) {
              cvvElement.style.borderColor = "";
            } else {
              cvvElement.style.border = "";
            }
            let value = cvvElement.value;
            if (checkCvv(value) !== "") {
              if (cvvElement.style.border) {
                cvvElement.style.borderColor = "red";
              } else {
                cvvElement.style.border = "1px solid red";
              }
              if (errorText) {
                errorText.innerText = checkCvv(value);
              }
            }
          });
        }

        if (billingZipElement) {
          billingZipElement.addEventListener("blur", () => {
            if (errorText) {
              errorText.innerText = "";
            }
            if (billingZipElement.style.border) {
              billingZipElement.style.borderColor = "";
            } else {
              billingZipElement.style.border = "";
            }
            let value = billingZipElement.value;
            if (checkBillingZip(value) !== "") {
              if (billingZipElement.style.border) {
                billingZipElement.style.borderColor = "red";
              } else {
                billingZipElement.style.border = "1px solid red";
              }
              if (errorText) {
                errorText.innerText = checkBillingZip(value);
              }
            }
          });
        }
      }
    };

  

    if (rules) {
      if (rules.validateRequired) {
        runValidateRequired();
      } else if (rules.ValidateMinMax) {
        runValidateMinMax();
      } else if (rules.ValidateEmail) {
        runValidateEmail();
      } else if (rules.ValidatePattern) {
        runValidatePattern();
      } else if (rules.ValidatePhone) {
        runValidatePhone();
      } else if (rules.ValidateNumber) {
        runValidateNumber();
      } else if (rules.ValidateInteger) {
        runValidateInteger();
      } else if (rules.ValidateFloat) {
        runValidateFloat();
      } else if (rules.ValidateDate) {
        runValidateDate();
      } else if (rules.ValidateTime) {
        runValidateTime();
      } else if (rules.ValidateUrl) {
        runValidateUrl();
      } else if (rules.ValidateCreditCard) {
        runValidateCreditCard();
      }
    }
  }

  render() {
    return <div id="_validation_wrapper">{this.props.children}</div>;
  }
}

export default ValidateForm;
