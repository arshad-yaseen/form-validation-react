
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arshad-yaseen/form-validation-react/blob/main/LICENCE) 
# Form-Validation-React

### form-validation-react is an easy-to-use npm library that enables developers to add validation rules to form inputs in React. It supports required fields, email formats, and custom rules with various validation functions and options that can be tailored to specific needs.

**Note:** This library is under development. We will be publishing all functions soon. For now, you can use the available functions.


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
  rules={
    {
      // add the rules here
    }
  }
>
  <form>
    <input type="text" required />
  </form>
</ValidateForm>;

```
# Rules
## Validate Required Inputs

#### To check if all required input fields are filled, use the following rule:

```javascript
validateRequired: {
  applyOnly:["name","password"] // checking only this inputs are filled
  action: "input_red_border",
  notvalidated: (notFilledInputs) => {
  console.log("Not filled required inputs",notFilledInputs);
  },

}

```

If a required input is not filled, the rule will return a callback with an array of the not-filled inputs. You can add the action `input_red_border` to change the border color of the not-filled inputs to red.


| Parameter | Type | Value | Optinal |
| --- | --- | --- | --- |
| `applyOnly` | `array	` | **Name** of the inputs | `yes` |
| `action` | `string` | input_red_border | `yes` |
| `notvalidated` | `callback function` | notFilledInputs | `yes` |

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
          }
        }}
      >
        <form>
          <input required type="text" name="full_name" />
          <input required type="email" name="email" />
          <input required type="password" name="password" />
          <button type="submit">Submit</button>
        </form>
      </ValidateForm>
      
    </div>
  );
}

export default App;


```
