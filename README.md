
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arshad-yaseen/form-validation-react/blob/main/LICENCE) 
# Form-Validation-React

### form-validation-react is an easy-to-use npm library that enables developers to add validation rules to form inputs in React. It supports required fields, email formats, and custom rules with various validation functions and options that can be tailored to specific needs.

**Note:** This library is under development. We will be publishing all functions soon. For now, you can use the available functions.

# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Validate Required Inputs](#validate-required-inputs)
- [Validate Min & Max](#validate-min-max)
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
## Validate Required Inputs

#### To check if all required input fields are filled, use the following rule:

```javascript
validateRequired: {
  message: "fill all required fields",
  applyOnly:["name","password"] // checking only this inputs are filled
  action: "input_red_border",
  notvalidated: (notFilledInputs) => {
  console.log("Not filled required inputs",notFilledInputs);
  }
}

```

If a required input is not filled, the rule will return a callback with an array of the not-filled inputs. You can add the action `input_red_border` to change the border color of the not-filled inputs to red.


| Parameter | Type | Value | Optinal |
| --- | --- | --- | --- |
| `message` | `string` | Message | `yes` |
| `applyOnly` | `array	` | **Name** of the inputs | `yes` |
| `action` | `string` | input_red_border | `yes` |
| `notvalidated` | `callback function` | notFilledInputs | `yes` | 


# 
## Validate Min & Max

#### Checking all **Min** and **Max** values of a form inputs and returning a callback and show error.

```javascript
ValidateMinMax: {
    message : {
        min: "Min length 4",
        max: "Max length 8"
    },
    exceedsMax: ()=> {
        console.log("Maximum length exceeded");
    },
    exceedsMin: ()=> {
        console.log("Minimum length exceeded");
    }
}


```

```html
 <input min={4} max={8} type="password" required />

```

the `min` in message object is when exceeded minimum the message will show.

the `max` in message object is when exceeded maximum the message will show


| Parameter | Type | Value | Optinal |
| --- | --- | --- | --- |
| `message` | `object	` | Messages | `yes` |
| `exceedsMax` | `callback function` | when exceeded max | `yes` |
| `exceedsMin` | `callback function` | when exceeded min | `yes` |

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
            applyOnly: ["full_name", "email"],
            action: "input_red_border",
            notvalidated: (notFilledInputs) => {
              console.log("Not filled required inputs", notFilledInputs);
            }
          },

          ValidateMinMax: {
            message : {
                min: "Min length 4",
                max: "Max length 8"
            },
            exceedsMax: ()=> {
                console.log("Maximum length exceeded");
            },
            exceedsMin: ()=> {
                console.log("Minimum length exceeded");
            }
          }

        }}
      >
        <form>
          <input min={4} max={8} type="password" name-"password" required />
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