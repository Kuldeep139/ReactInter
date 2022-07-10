import React, { Component } from 'react'
import Props from './Props'

export class Parent extends Component {
  render() {
    return (
      <div>
      <Props c='green'/>
      </div>
    )
  }
}

export default Parent