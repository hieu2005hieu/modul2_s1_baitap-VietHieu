import React, { Component } from 'react'

export default class Baitap1 extends Component {
    
    render() {
      let arr = ["HTML", "javascrip", "Python", "C#"];
      return (
        <>
          <h1>Danh Sách Kháo Học</h1>
          <ul>
            {arr.map((item) => (
              <li>{ item}</li>
            ))}
          </ul>
      </>
       
       
    )
  }
}
