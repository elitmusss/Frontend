import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "wheat",
          marginTop: "5rem",
          minHeight: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Made with love
      </div>
    );
  }
}
