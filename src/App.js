import React, { Component } from 'react'
import './App.css'
import Colorbox from './Colorbox'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      colorBoxes: []
    }
  }
  addColorBox = () => {
    const {colorBoxes} = this.state
    colorBoxes.push(<Colorbox />)
    this.setState({colorBoxes})
  }
  render(){
    return(
      <div className="App">
      {this.state.colorBoxes.map((colorBox)=>{
        return colorBox
      })}
      <div>
      <button onClick={ this.addColorBox }>
      Add a color box
    </button>
    </div>
    </div>
    )
  }
}
export default App;
