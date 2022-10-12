import React, { Component } from "react";
import FormValidator from "./FormValidator";
class App extends Component {
  constructor() {
    super();

    this.validator = new FormValidator([
      {
        field: "full_name",
        method: "isEmpty",
        validWhen: false,
        message: "Enter full name.",
      },
      {
        field: "email",
        method: "isEmpty",
        validWhen: false,
        message: "Enter your email address.",
      },
      {
        field: "email",
        method: "isEmail",
        validWhen: true,
        message: "Enter valid email address.",
      },
      {
        field: "phone",
        method: "isEmpty",
        validWhen: false,
        message: "Enter a phone number.",
      },
      {
        field: "phone",
        method: "matches",
        args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
        validWhen: true,
        message: "Enter valid phone number.",
      },
      {
        field: "password",
        method: "isEmpty",
        validWhen: false,
        message: "Enter password.",
      },
      {
        field: "password_confirmation",
        method: "isEmpty",
        validWhen: false,
        message: "Enter Password confirmation.",
      },
      {
        field: "password_confirmation",
        method: this.passwordMatch, // notice that we are passing a custom function here
        validWhen: true,
        message: "Password and password confirmation do not match.",
      },
    ]);
    this.state = {
      user_name: "",
      full_name: "",
      email: "",
      phone: "",
      password: "",
      password_confirmation: "",
      modal: false,
      State: "",
      Country: "",
      validation: this.validator.valid(),
    };
    this.submitted = false;
  }
  passwordMatch = (confirmation, state) => state.password === confirmation;
  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const validation = this.validator.validate(this.state);
    this.setState({
      validation,
    });
    this.submitted = true;
    if (validation.isValid) {
      //reaches here if form validates successfully...
      console.log(this.state);
      this.state.modal = true;
    }
  };
  handleFormReset = (event) => {
    event.preventDefault();
    window.location.reload();
  };
  render() {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;
    return (
      <div>
        {this.state.modal ? (
          <div className="form">
            <form>
              <div>
                <div>
                  <h2>Your Entry has been submitted </h2>
                </div>
                <div>
                  <label htmlFor="user_name">User Name</label>
                </div>
                <div>
                  <h6>{this.state.password}</h6>
                </div>
                <div>
                  <label htmlFor="full_name">User Name</label>
                </div>
                <div>
                  <h6>{this.state.full_name}</h6>
                </div>
                <div>
                  <label htmlFor="email">User Name</label>
                </div>
                <div>
                  <h6>{this.state.email}</h6>
                </div>
                <div>
                  <label htmlFor="phone">User Name</label>
                </div>
                <div>
                  <h6>{this.state.phone}</h6>
                </div>
              </div>
              <div>
                <button
                  onClick={this.handleFormReset}
                  className="btn btn-primary"
                >
                  {" "}
                  Reset{" "}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="container">
            <div className="row">
              <div className="form">
                <div className="col-md-5 col-md-offset-4">
                  <form className="registrationForm">
                    <div>
                      <h3>Customer Registration</h3>
                    </div>
                    <div>
                      <label htmlFor="user_name">User Name</label>
                      <input
                        type="string"
                        className="form-control"
                        name="user_name"
                        placeholder="User Name"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className={validation.email.isInvalid && "has-error"}>
                      <label htmlFor="full_name">Full Name</label>
                      <input
                        type="string"
                        className="form-control"
                        name="full_name"
                        placeholder="Full Name"
                        onChange={this.handleInputChange}
                      />{" "}
                      <span className="help-block">
                        {validation.full_name.message}
                      </span>{" "}
                    </div>
                    <div className={validation.email.isInvalid && "has-error"}>
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email address"
                        onChange={this.handleInputChange}
                      />{" "}
                      <span className="help-block">
                        {validation.email.message}
                      </span>{" "}
                    </div>
                    <div className={validation.phone.isInvalid && "has-error"}>
                      <label htmlFor="phone">
                        Phone(enter only 10 digit number)
                      </label>
                      <input
                        type="phone"
                        className="form-control"
                        name="phone"
                        placeholder="Phone Number"
                        onChange={this.handleInputChange}
                      />{" "}
                      <span className="help-block">
                        {validation.phone.message}
                      </span>{" "}
                    </div>
                    <div
                      className={validation.password.isInvalid && "has-error"}
                    >
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={this.handleInputChange}
                      />{" "}
                      <span className="help-block">
                        {validation.password.message}
                      </span>{" "}
                    </div>
                    <div
                      className={
                        validation.password_confirmation.isInvalid &&
                        "has-error"
                      }
                    >
                      <label htmlFor="password_confirmation">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        name="password_confirmation"
                        onChange={this.handleInputChange}
                      />{" "}
                      <span className="help-block">
                        {validation.password_confirmation.message}
                      </span>{" "}
                    </div>
                    <div>
                      <label htmlFor="State">State</label>
                      <select class="form-control">
                        <option selected="">State</option>
                        <option>State1</option>
                        <option>State2</option>
                        <option>State3</option>
                      </select>{" "}
                    </div>
                    <div>
                      <label htmlFor="Country">Country</label>
                      <select class="form-control">
                        <option selected="">Country</option>
                        <option>Country1</option>
                        <option>Country2</option>
                        <option>Country3</option>
                      </select>{" "}
                    </div>
                    {this.state.modal ? (
                      ""
                    ) : (
                      <button
                        onClick={this.handleFormSubmit}
                        className="btn btn-primary"
                      >
                        {" "}
                        Register{" "}
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default App;
