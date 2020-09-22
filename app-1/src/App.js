import React, {Component} from "react";
import './App.css';



class App extends component {
  constructor(){
    super();
    this.state={
      text: ""
    };

  }
  handleChange(value){
    this.setState({text:value});
  }

  render(){
    return (
      <div className="App">
        <input onChange ={e => this.handleChange(e.target.value)}/>
        <p>{this.state.text}</p>
      </div>
    )


  }

}




export default App;
