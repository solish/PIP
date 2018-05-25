import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loginUser } from "../../../actions/authActions";
import "./styles.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/developers");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/developers");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const currentUser = {
      email: this.state.email,
      password: this.state.password
    };
    // console.log(currentUser);
    this.props.loginUser(currentUser);
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="loginContainer">
        <div className="loginformContainer">
          <h1 className="loginHeaderText">Log In</h1>
          <p className="loginText">Log In to your DevLink account</p>
          <form onSubmit={this.onSubmit} className="loginInputForm">
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              placeholder="Email Address"
            />
            <span className="is-invalid">{errors.email}</span>
            <br />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              placeholder="Password"
            />
            <span className="is-invalid">{errors.password}</span>
            <br />
            <button className="loginSubmintBtn">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
