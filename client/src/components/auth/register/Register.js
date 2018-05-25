import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { registerUser } from "../../../actions/authActions";
import "./styles.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  formSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
    // console.log(newUser);
    // axios
    //   .post("/api/users/register", newUser)
    //   .then(res => console.log(res.data))
    //   .catch(err => this.setState({ errors: err.response.data }));
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="registerContainer">
        <div className="registerformContainer">
          <h1 className="registerSignupText">Sign Up</h1>
          <p className="registerAccountText">Create your DevLink account</p>
          <form onSubmit={this.formSubmit} className="registerInputForm">
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              placeholder="Name"
            />
            <span className="is-invalid">{errors.name}</span>
            <br />
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
            <input
              type="password"
              name="password2"
              value={this.state.password2}
              onChange={this.onChange}
              placeholder="Confirm Password"
            />
            <span className="is-invalid">{errors.password2}</span>
            <br />
            <button className="registersignupSubmintBtn">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
