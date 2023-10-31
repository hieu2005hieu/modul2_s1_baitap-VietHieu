import React, { Component } from "react";

export default class Baitap3 extends Component {
  render() {
      let today = new Date();
    return (
      <>
            <h2>Xin Chao Cac Ban!</h2>
            <p>Bay gio la : { today.toLocaleTimeString()}</p>
      </>
    );
  }
}
