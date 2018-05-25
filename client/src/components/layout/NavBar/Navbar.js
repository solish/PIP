import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";

import "./styles.css";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <ul className="rightListItem">
        <li>
          <Link className="navLink" to="/feed">
            Post Feed
          </Link>
        </li>
        <li>
          <Link
            className="navLink"
            to="/"
            onClick={this.onLogoutClick.bind(this)}
          >
            Log out
          </Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="rightListItem">
        <li>
          <Link className="navLink" to="/register">
            Sign Up
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <div className="naveBarContainer">
        <div className="navBarContainerLeft">
          <nav className="navLeft">
            <ul className="leftListIemt">
              <li>
                <Link className="navLink" to="/">
                  HomeDepot
                </Link>
              </li>
              <li>
                <Link className="navLink" to="/developers">
                  Developers
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navBarContainerRight">
          <nav className="navRight">
            <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
          </nav>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
