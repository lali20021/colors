import React, { Component } from 'react'
import './App.css'

class Colorbox extends Component{
  constructor(props){
    super(props)
    this.state = {
      colors: [
        {
          name: "grey",
          value: "grey"
        },
        {
          name: "blue",
          value: "blue",
        },
        {
          name: "black",
          value : "black"
        },
      ],
      colorIndex: 0,
    }
  }
  handleClick = ()=> {
    const { colors, colorIndex} = this.state
    let newIndex = (colorIndex + 1) % colors.length
    this.setState({colorIndex: newIndex})

  }
  render(){
    const { colors, colorIndex} = this.state
    const {currentColor} = colors[colorIndex]
    return(
      <div
      className="color-box"
      style={{backgroundColor: currentColor.value}}
      onClick={ this.handleClick }
      >
      I am a color box: {currentColor.name}
      </div>
    );
  }
}
export default Colorbox;
