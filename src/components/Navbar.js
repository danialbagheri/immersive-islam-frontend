import React, { Component } from "react";
import Search from "./Search";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <a className="navbar-brand" href="/">
          <img
            src={require("../assets/logo/logo.png")}
            style={{ height: "70px" }}
            alt="logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/channels">
                Channels
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/books"
                tabIndex="-1"
                aria-disabled="true"
              >
                Books
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/podcasts"
                tabIndex="-1"
                aria-disabled="true"
              >
                PodCasts
              </a>
            </li>
          </ul>
          <Search />
        </div>
      </nav>
    );
  }
}

export default Navbar;
