import React from "react";
import Button from "./Button";

export default class LoginForm extends React.Component {
  render() {
    return (
      <div class="container" id="userForm">
        <h3> Login </h3>
        <div>
          <form>
            <div class="form-group">
              <label for="InputEmail">Username</label>
              <input
                type="text"
                class="form-control"
                id="userEmail"
                aria-describedby="emailHelp"
                placeholder="Username"
              ></input>
            </div>
            <br />
            <div class="form-group">
              <label for="InputPassword">Password</label>
              <input
                type="text"
                class="form-control"
                id="userPassword"
                aria-describedby="PasswordHelp"
                placeholder="Password"
              ></input>
              <br />
              <br />
              <Button />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
