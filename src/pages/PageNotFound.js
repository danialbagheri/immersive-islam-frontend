import React, { Component } from "react";

class PageNotFound extends Component {
  render() {
    return (
      <div className="container">
        <div className="gap-50" />
        <p>Error 404! We couldn't find the page you are looking for :(</p>
        <p>
          It could be because the page is under development. Please visit again
          later.
        </p>
        <div className="gap-50" />
      </div>
    );
  }
}
export default PageNotFound;
