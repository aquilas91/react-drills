import React, {Component} from "react";
import "./App.css";

Class App extends Component {
  Constructor(){
    super();
    this.state={ furniture: ["sofar", "table", "chairs", "bedframe", "TV-stand"]

    };
}

render() {
  let furnitureDisplay= this.state.furniture.map((e, i) => {
    return <h2 key={i}>{e}</h2>;

  });
    return <div ClassName="App">{furnitureDisplay}</div>
  }
}

export default App;