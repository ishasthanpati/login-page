import React from "react";
import Input from "./Input";

function Form(props) {
  return (
      <div>
      <h1>Hello</h1>
      <form className="form">
    <Input type="text" placeholder="Username" />
    <Input type="password" placeholder="Password" />
  {!props.isRegistered && (
    <input type="password" placeholder="Confirm Password" />
  )}

  <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
</form>
      </div>
    
  );
}

export default Form;
