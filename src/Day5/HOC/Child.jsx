import React from 'react'
// importing HighOrder file
import EnhancedComponent from './HigherOrder' 
  
class Child extends React.Component {
  render() {
    // Destructuring the props
    const { show, handleclick } = this.props
  
    // Calling out the props
    return <button onClick={handleclick}>Click : {show}
    </button> 
  }
}
  
  
export default EnhancedComponent(Child);