
![hero](https://i.postimg.cc/rwWKV7X7/Twitter-header-1-page-0001.jpg)


### form-validation-react is an easy-to-use npm library that enables developers to add validation rules to form inputs in React. It supports required fields, email formats, and custom rules with various validation functions and options that can be tailored to specific needs.

**Note:** This library is under development. We will be publishing all functions soon. For now, you can use the available functions.

# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Validate Required Inputs](#validate-required-inputs)
- [Validate Min & Max](#validate-min-and-max)
- [Validate Email](#validate-email)
- [Validate Pattern](#validate-pattern)
- [Validate Phone Number](#validate-phone-number)
- [Validate Number](#validate-number-input)
- [Validate Integer](#validate-integer)
- [Validate Float](#validate-float)
- [Validate Date](#validate-date)
- [Validate Time](#validate-time)
- [Validate Url](#validate-URL)
- [Validate Credit Card](#validate-credit-card)
- [Example Reactjs Code](#example-reactjs-code)
## Installation 

You can install the package using npm or yarn:

```bash
  npm i form-validation-react

```

```bash
  yarn add form-validation-react

```

## Usage
To use the library, import it in your React component:

```javascript
  import ValidateForm from "form-validation-react"

```


Then, wrap your form with <ValidateForm> :

```javascript
<ValidateForm
  onSubmit={(event)=> {
    console.log("Form submitted",event);
  }}
  errorElement="#error_show_element" // optional
  rules={{
      // add the rules here
  }}
>

  <form>
    <h1 id="error_show_element" > // The error message will appear in this element </h1>
    <input type="text" required />
  </form>

</ValidateForm>;

```
#### `onSubmit`: This function executes when click on submit button with no validation errors. If you not call this function the form will submit when no validation errors

# Rules
# Validate Required Inputs

#### To check if all required input fields are filled, use the following rule:

```javascript
validateRequired: {

  action: "show_error_message",
  message: "fill all required fields",
  applyOnly:["name","password"] // checking only this inputs are filled
  notvalidated: (notFilledInputs) => {
  console.log("Not filled required inputs",notFilledInputs);
  }
  onsuccess:()=> {
    console.log("All required fields are filled");
  }

}

```

If a required input is not filled, the rule will return a callback with an array of the not-filled inputs. You can add the action `input_red_border` to change the border color of the not-filled inputs to red.


| Key | Type | Parameter | Optional |
| --- | --- | --- | --- |
| `action` | `string` | `input_red_border`,`show_error_message`,`both` | `no` |
| `message` | `string` | Message | `yes` |
| `applyOnly` | `array	` | **Name** of the inputs | `yes` |
| `notvalidated` | `callback function` | notFilledInputs | `yes` | 
| `onsuccess` | `callback function` | no params | `yes` | 


# 
# Validate Min and Max

#### Checking all **Min** and **Max** values of a form inputs and returning a callback and show error.

#### **Note:** This rule is not work with type `password`. because password input is not readable or writable for security reasons. work only with `text`,`number` type

```javascript
ValidateMinMax: {

    when: "typing"
    message : {
        min: "Full name must be at least 4 characters",
        max: "Full name must be at most 8 characters"
    },
    exceedsMax: ()=> {
        console.log("Maximum length exceeded");
    },
    exceedsMin: ()=> {
        console.log("Minimum length exceeded");
    }
    onsuccess:(validatedInput)=> {
        console.log("Length is in range of :",validatedInput);
    }

}


```

```html
 <input min={4} max={8} type="number" required />

```

the `min` in message object is when exceeded minimum the message will show.

the `max` in message object is when exceeded maximum the message will show


| Key | Type | Parameter | Optional |
| --- | --- | --- | --- |
| `when` | `string	` | `typing`,`onblur` | `no` |
| `message` | `object	` | Messages | `yes` |
| `exceedsMax` | `callback function` | when exceeded max | `yes` |
| `exceedsMin` | `callback function` | when exceeded min | `yes` |
| `onsuccess` | `callback function` | validatedInput | `yes` |

# 
# Validate Email

#### This is used to validate email addresses based on pre-defined patterns. It takes input from a form and checks it against a regular expression pattern

```javascript
ValidateEmail: {

    type: "yahoo",
    emailInput: "my_email",
    message: "Please enter a valid yahoo email",
    onsuccess: () => console.log("Email is valid"),
    invalid: () => console.log("Email is invalid"),
    when: "onblur",

}
```

```html
<input name="email" type="my_email" required />
```

## Parameters

#### `type:` a string representing the type of email being validated (personal, business, yahoo, gmail, hotmail, aol, isp, education, government, nonprofit, international, domain-specific, or alias)
#### `emailInput:` a string representing the name of the input element in the form that contains the email address
#### `message:` a string representing the error message to be displayed if the email is invalid
#### `onsuccess:` a callback function to be executed if the email is valid
#### `invalid:` a callback function to be executed if the email is invalid
#### `when:` a string specifying when the validation should occur (onblur or typing)
#
# Validate Pattern

#### This function is used to validate input fields against a specific pattern, such as a regular expression or a wildcard pattern.


```javascript
validatePattern:{

	input: 'email',
  	pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  	type: 'regex',
  	when: 'typing',
  	allowEmpty: false,
  	onsuccess: (inputElement) => console.log('Validation succeeded!’),
  	invalid: () => console.log('Validation failed!’),
  	errorMessage: 'Please enter a valid email address.'

}
```

#### Validate using a regular expression pattern

```javascript
validatePattern:{
	pattern: /^\S+@\S+\.\S+$/,
  	modifiers: 'i',
  	errorMessage: 'Please enter a valid email address',
}
```

#### Validate using a wildcard pattern

```javascript
validatePattern:{
	pattern: '*.com',
  	type: 'wildcard',
  	modifiers: 'i',
  	errorMessage: 'Please enter an email address ending in .com'
}
```

#### Allow empty input

```javascript
validatePattern:{
	pattern: /^\S+@\S+\.\S+$/,
  	modifiers: 'i',
  	allowEmpty: true,
}
```

## Parameters

* #### `input` (required): The name of the input field to validate.
* #### `pattern` (required): A string representing the pattern to validate against. It can be a regular expression or a wildcard pattern.
* #### `type` (required): A string representing the type of pattern used. It can be either `"regex"` or `"wildcard"`.
* #### `modifiers` (optional): A string representing the modifiers for the regular expression. Only used when `type` is `"regex"`.
* #### `when` (optional): A string representing the event that triggers the validation. It can be either `"onblur"` or `"typing"`. If not specified, `"onblur"` is used by default.
* #### `allowEmpty` (optional): A boolean value indicating whether empty input should be considered valid. If not specified, `false` is used by default.
* #### `onsuccess` (optional): A function that is called when the validation succeeds.
* #### `invalid` (optional): A function that is called when the validation fails.
* #### `errorMessage` (optional): A string representing the error message to display when the validation fails.


We provide two different patterns - a regular expression pattern and a wildcard pattern - along with options for case-insensitivity (`modifiers: 'i'`) and custom error messages.

We also use the `allowEmpty` option to allow the input to be empty, which can be useful for optional fields.

# 
# Validate Phone Number

#### A function that validates a phone number input field based on specified country.

```javascript
ValidatePhone: {

    phoneInput: 'phone_input', // required
    countryCode: 'US', // required
    when: 'onblur', // required
    
    onsuccess: (input) => console.log(`${input.value} is a valid phone number`),
    invalid: () => console.log('Invalid phone number'),
    message: 'Please enter a valid US phone number',
    isLandlineNumber: (isLandline) => console.log(`Is a landline: ${isLandline}`),
    isMobileNumber: (isMobile) => console.log(`Is a mobile: ${isMobile}`)

}
```

```html
<input type="number" name="phone_input" />
```

 #### `phoneInput`: the name of the input field to validate.
 #### `countryCode`: an optional country code to use in the validation process.
 #### `when`: the event to trigger the validation process. Can be set to either "onblur" or "typing".
 #### `onsuccess`: a function to execute when the validation is successful.
 #### `invalid`: a function to execute when the validation is unsuccessful.
 #### `message`: an error message to display when the validation is unsuccessful.
 #### `isLandlineNumber`: a function that receives a boolean value indicating if the input is a landline number.
 #### `isMobileNumber`: a function that receives a boolean value indicating if the input is a mobile number.

# 
# Validate Number Input

#### This is a function to validate numbers input. This function can validate a number within a specified range, with a specified number of decimal places, and check whether it's an integer. This function also supports negative numbers and numbers in a specific base.

```javascript
ValidateNumber: {

    input: "my-number-input", // required
    when: "typing", // required

    min: 0,
    max: 100,
    decimalPlaces: 2,
    allowNegative: false,
    integersOnly: false,
    base: 10,
    customErrorMessages: {
      invalidNumber: "Invalid number",
      range: "Number must be between 0 and 100",
      decimalPlaces: "Number must have no more than 2 decimal places",
      negative: "Negative numbers are not allowed",
      integersOnly: "Only integers are allowed",
      base: "Number must be in base 10",
    },
    onsuccess: () => {
      console.log("Validation succeeded!");
    },
    invalid: () => {
      console.log("Validation failed!");
    }

},
```

```html
<input type="number" name="my-number-input" />
```

 #### `min` (optional): The minimum value of the number.
 #### `max` (optional): The maximum value of the number.
 #### `input`: The name of the input field to validate.
 #### `when`: The timing of the validation. Valid values are "onblur" and "typing".
 #### `decimalPlaces` (optional): The number of decimal places
 #### `allowNegative` (optional): A boolean value indicating whether negative numbers are allowed. Defaults to true.
 #### `integersOnly` (optional): A boolean value indicating whether the number must be an integer. Defaults to false.
 #### `base` (optional): The base of the number.
 #### `customErrorMessages` (optional): An object containing custom error messages. Valid properties are invalidNumber, range, decimalPlaces, negative, integersOnly, and base.
 #### `onsuccess` (optional): A callback function to execute when validation succeeds.
 #### `invalid` (optional): A callback function to execute when validation fails.

# 
# Validate Integer

#### This is used for validating integer values of an input based on a set of defined rules.

```javascript
ValidateInteger: {
    when: 'onblur', // or 'typing'
    input: 'age', // name of the input element to validate
    minValue: 0,
    maxValue: 100,
    uniqueValues: [10, 20, 30],
    positiveOnly: true,
    evenOnly: true,
    divisibleBy: 5,
    invalid: () => {
      console.log('Invalid input');
    },
    customErrorMessages: {
      notANumber: 'Please enter a number',
      notAnInteger: 'Please enter an integer',
      outOfRange: 'Please enter a value between 0 and 100',
      notUnique: 'Please enter a unique value',
      notPositive: 'Please enter a positive value',
      notEven: 'Please enter an even value',
      notDivisible: 'Please enter a value divisible by 5',
    },
  },
```

* `when` **(required)**: A string indicating when to run the validation. Possible values are 'onblur' (validate on blur) and 'typing' (validate while typing).
* `input`: **(required)** A string representing the name of the input element to validate.
* `minValue` (optional): An integer representing the minimum value that the input element can have.
* `maxValue` (optional): An integer representing the maximum value that the input element can have. 
* `uniqueValues` (optional): An array of integers representing values that should be unique.
* `positiveOnly` (optional): A boolean indicating whether the input element can only have positive values.

* `evenOnly` (optional): A boolean indicating whether the input element can only have even values.
* `divisibleBy` (optional): An integer representing a number by which the input element should be divisible.
* `invalid` (optional): A function to call if the input element is invalid.
* `customErrorMessages` (optional): An object containing custom error messages to display.

#
# Validate Float

#### This function provides a method for validating float values.

```javascript
ValidateFloat: {

    when: 'onblur', // when to validate input - onblur or typing
    input: 'input-name', // name of input field to validate

    required: true, // whether the input is required or not
    min: 0, // minimum value for input
    max: 100, // maximum value for input
    precision: 2, // maximum number of decimal places allowed
    customErrorMessages: {
      required: 'This field is required!',
      invalid: 'Please enter a valid number!',
      min: 'Please enter a number greater than or equal to {min}!',
      max: 'Please enter a number less than or equal to {max}!',
      precision: 'Please enter a number with at most {precision} decimal places!',
    },
    
},
```

#
# Validate Date

#### This function is used for validate date input

```javascript
ValidateDate: {

    when: 'typing', // required
    input: 'dob', // required

    minDate: new Date('2000-01-01'),
    maxDate: new Date('2023-03-07'),
    allowOnlyBusinessDay: true,
    allowOnlyWeekend: false,
    customFormat: 'dd-MM-yyyy',
    timeZone: 'Asia/Kolkata',
    customErrorMessages: {
      invalidDate: 'Invalid date format. Please enter a valid date.',
      minDate: 'Date should not be earlier than 1st January 2000.',
      maxDate: 'Date should not be later than 7th March 2023.',
      businessDay: 'Selected date is not a business day.',
      notWeekend: 'Selected date is not a weekend.',
      invalidFormat: 'Date format is not valid. Please enter the date in dd-MM-yyyy format.',
      invalidTimeZone: 'Invalid time zone. Please enter a valid time zone.',
    }

  }
```

#### `when`
The when rule determines when the validation should occur. It can be set to "typing" or "onblur".

#### `input`
The input rule specifies the name of the input field to validate.

#### `minDate`
The minDate rule specifies the minimum date that is allowed. Dates before this minimum date are considered invalid.

#### `maxDate`
The maxDate rule specifies the maximum date that is allowed. Dates after this maximum date are considered invalid.

#### `allowOnlyBusinessDay`
The allowOnlyBusinessDay rule determines whether or not only business days are allowed. Business days are weekdays (Monday to Friday).

#### `allowOnlyWeekend`
The allowOnlyWeekend rule determines whether or not only weekends are allowed. Weekends are Saturday and Sunday.

#### `customFormat`
The customFormat rule specifies the custom format for the date. If not specified, the date will be validated in the default format.

#### `timeZone`
The timeZone rule specifies the time zone for the date. If not specified, the date will be validated in the local time zone.

#### `customErrorMessages`
The customErrorMessages rule allows you to specify custom error messages for different validation rules. If not specified, default error messages will be used.


#
# Validate Time

#### This function is designed to validate time inputs according to the specified rules. It checks for valid time format, valid time range, valid timezone and whether the time falls within a specified interval.

```javascript
ValidateTime: {

  when: 'onblur', // required
  input: 'time-input', // required

  customErrorMessages: {
    invalidFormat: 'Invalid time format, please enter time in the format HH:mm',
    invalidRange: 'Time is out of range, please enter a valid time',
    invalidInterval: 'Time is not within the specified interval, please enter a valid time',
    invalidTimezone: 'Invalid timezone, please enter a valid timezone',
  },
  timeRange: {
    startTime: '08:00',
    endTime: '17:00',
  },
  timeInterval: {
    startInterval: 480,
    endInterval: 1020,
  },
  timezone: 'America/New_York'

}
```

* `when` : A string value that specifies when to perform the validation. It can be either 'typing' or 'onblur'.
* `input` : A string value that specifies the name of the input element to validate.
* `customErrorMessages` : An object that specifies custom error messages to use for the validation.

* `timeRange` : An object that specifies a time range that the input value should fall within.
* `timeInterval` : An object that specifies an interval that the input value should fall within.
* `timezone` : A string value that specifies the timezone to use for the validation. If not specified, the local timezone is used.

# 
# Validate URL

#### This function validates the URL. It checks the URL for well-formedness, protocol validity, domain validity, IP address validity, accessibility, and invalid characters.

```javascript

ValidateUrl: {

    when: "typing", // required 
    input: "urlInput", // required 
    
    CustomErrorMessages: {
      invalidUrl: "Invalid URL",
      invalidProtocol: "Invalid Protocol",
      invalidDomain: "Invalid Domain",
      invalidIpAddress: "Invalid IP Address",
      inaccessibleUrl: "Inaccessible URL",
      invalidCharacters: "Invalid Characters",
      protocolNotAllowed: "Protocol not allowed",
    },
    checkUrl: true,
    checkProtocol: true,
    checkDomain: true,
    checkIpAddress: true,
    checkInAccessibleUrl: true,
    checkCharacters: true,
    protocols: ["https", "http"],

  },

```

* `when`: When to validate the URL input. This can be either "typing" or "onblur".
* `input`: The name of the input field to validate.
* `CustomErrorMessages`: Custom error messages for each type of validation error. This is an optional property.
* `checkUrl`: Whether to check the URL for well-formedness.
* `checkProtocol`: Whether to check the protocol of the URL.
* `checkDomain`: Whether to check the domain name of the URL.
* `checkIpAddress`: Whether to check the IP address of the URL.
* `checkInAccessibleUrl`: Whether to check if the URL is accessible.
* `checkCharacters`: Whether to check for invalid characters in the URL.

* `protocols`: An array of allowed protocols. This is used when checkProtocol is set to true. If this property is not specified, any protocol is allowed.


# 
# Validate Credit Card

#### This function that can be used to validate credit card information

```javascript

ValidateCreditCard: {

    when: "typing", // required
    cardNumber: "card-input", // required

    allowedCards: ["Visa", "Mastercard"],
    expirationDate: "expiration-date",
    cvv: "cvv",
    billingZip: "billing-zip",
    customErrorMessages: {
      invalidCardNumber: "Invalid credit card number",
      onlyAllowedCards: "Only Visa and Mastercard are allowed",
      invalidExpirationDate: "Invalid expiration date",
      invalidCVV: "Invalid CVV code",
      invalidBillingZip: "Invalid billing zip code",
    },
    getCardType: (cardType) => console.log(cardType); // Visa

  }

```

* `when` - When to validate. This can be either "typing" or "onblur".
* `allowedCards` - An optional array of strings that contains the card types that are allowed. If this property is not set, all card types are allowed.
* `cardNumber` - A string that contains the name of the input element that contains the credit card number.
* `expirationDate` - A string that contains the name of the input element that contains the expiration date.
* `cvv` - A string that contains the name of the input element that contains the CVV code.
* `billingZip` - A string that contains the name of the input element that contains the billing zip code.

* `customErrorMessages` - An optional object that contains custom error messages for each validation rule. The keys should match the validation function names, and the values should be strings that represent the error message.
* `getCardType` - An optional function that can be used to determine the card type based on the credit card number.



# Example Reactjs Code

Here is an example of how to use the library in a ReactJS component:

```javascript
import React from "react";
import ValidateForm from "form-validation-react";

function App() {
  return (
    <div className="App">

      <ValidateForm
        rules={{

          validateRequired: {
            action: "input_red_border",
            notvalidated: (notFilledInputs) => {
              console.log("Not filled required inputs", notFilledInputs);
            }
          },

          ValidateMinMax: {
            when: "onblur"
            message : {
                min: "Full name must be at least 4 characters",
                max: "Full name must be at most 8 characters"
            }
          }

        }}
      >
        <form>
          <input min={4} max={8} type="text" name="full_name" required />
          <input required type="text" name="full_name" />
          <input required type="email" name="email" />
          <button type="submit">Submit</button>
        </form>
      </ValidateForm>
      
    </div>
  );
}

export default App;


```
## Thanks to Contributors


![hero](https://i.postimg.cc/CMtCrcH1/contributors-removebg-preview-1.png)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arshad-yaseen/form-validation-react/blob/main/LICENCE) 

