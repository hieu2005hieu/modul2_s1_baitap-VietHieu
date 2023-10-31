import React, { Component } from "react";
import Baitap6_1 from "./Baitap6_1";
import Baitap6_2 from "./Baitap6_2";
import Baitap6_3 from "./Baitap6_3";
import Baitap6_4 from "./Baitap6_4";
import Baitap6_5 from "./Baitap6_5";
export default class Baitap6 extends Component {
  render() {
    return (
      <>
        <Baitap6_1/>
        {/* End header area */}

        <Baitap6_2/>
        {/* End mainmenu area */}

        <Baitap6_3/>

        {/* List product */}
        <Baitap6_4/>

        {/* Footer area */}
        <Baitap6_5/>
      </>
    );
  }
}
