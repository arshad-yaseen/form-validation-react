[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/K3K0J5VAD)

![hero](https://i.postimg.cc/8kXtR7QM/Screenshot-2023-03-02-at-10-53-56-AM.png)

# Form-Validation-React

### form-validation-react is an easy-to-use npm library that enables developers to add validation rules to form inputs in React. It supports required fields, email formats, and custom rules with various validation functions and options that can be tailored to specific needs.

**Note:** This library is under development. We will be publishing all functions soon. For now, you can use the available functions.

# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Validate Required Inputs](#validate-required-inputs)
- [Validate Min & Max](#validate-min-and-max)
- [Validate Email](#validate-email)
- [Validate Pattern](#validate-pattern)
- [Example Reactjs Code](#example-reactjs-code)
- [Licence](#license)
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
  errorElement="#error_show_element" // optional
  rules={
    {
      // add the rules here
    }
  }
>
  <form>
    <h1 id="error_show_element" > // The error message will appear in this element </h1>
    <input type="text" required />
  </form>
</ValidateForm>;

```
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
## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arshad-yaseen/form-validation-react/blob/main/LICENCE) 

