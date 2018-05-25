import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import "./styles.css";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/developers");
    }
  }

  render() {
    return (
      <div className="landingContainer">
        <div className="landingContentContainer">
          <h1 className="landingHeaderText">Developer Link</h1>
          <p className="landingText">
            Create a developer profile, share posts and get help from other
            developers
          </p>
          <div className="landingBtnsContainer">
            <button className="landingSignUpBtn">
              <Link to="/register" className="landingLink">
                Sign Up
              </Link>
            </button>
            <button className="landingLoginBtn">
              <Link to="/login" className="landingLink">
                LogIn
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(Landing);
