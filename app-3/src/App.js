import React, {Component} from "react";
import "./App.css"


Class App extends Component{
    constructor(){
      super();
      this.state={
        filterString:"",
        car:["audi","nissan","bmw"];
      };
    }
    handleChange(filter){
      this.setState({filterString:filter});
    }


    render (){
      let filterCar= this.state.car.filter((e,i) =>{
        return e.includes(this.state.filterString);
      })
      .map((e,i) =>{
        return <h2 key={i}>{e}</h2>;
      });
       return(
       <div className="App">
         <input onChange={e =>this.handleChange(e.target.value)} type="text"/>
         {filterCar}
       </div>
       );
    }
}




export default App;