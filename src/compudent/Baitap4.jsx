import React, { Component } from "react";
import Baitap4_1 from "./Baitap4_1";
import Baitap4_2 from "./Baitap4_2";

export default class Baitap4 extends Component {
  render() {
    return (
      <>
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="row">
                      <Baitap4_1 />

                      <Baitap4_2 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        ;
      </>
    );
  }
}
