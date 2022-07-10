import React, { Component } from 'react'

export class ClassComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         City: "Mumbai"
      }
    }
  render() {
    return (
      <div> <h1> Class Component </h1>{this.state.City}</div>
    )
  }
}

export default ClassComp;