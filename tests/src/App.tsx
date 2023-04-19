import React from "react";
import ValidateForm from "form-validation-react";

function App() {
  return (
    <div>
      <h1 id="error_message">{""}</h1>
      <ValidateForm
        errorElement="#error_message"
        rules={{
          ValidateEmail: {
            emailInput: "email",
            type: "business",
            when: "onblur",
            message: "Please enter a valid email address",
          },
        }}
        onSubmit={(e) => {
          console.log(e);
        }}
      >
        <form>
          <input type="text" name="name" id="name" />
          <input
            placeholder="Enter email"
            type="text"
            name="email"
            id="email"
            required
          />
          <input type="text" name="password" id="password" />
          <input type="text" name="password2" id="password2" />
          <input type="submit" value="Submit" />
        </form>
      </ValidateForm>
    </div>
  );
}

export default App;
