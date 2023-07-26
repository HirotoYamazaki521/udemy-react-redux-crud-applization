import React from "react";
import { Component } from "react";


const App = () => (<Counter></Counter>);

class Counter extends Component{
  // 初期化処理が実行される
  constructor(props){
    super(props)
    // 初期化時にオブジェクトが設定される
    this.state = {count:0}
  }

  handlePlusButton = () => {
    // setStateが実行されるとrenderが実行される
    this.setState({count: this.state.count + 1})
  }

  handleMinusButton = () => {
    this.setState({count: this.state.count - 1})
  }

  render(){
    return (
      // returnで返すjsxは親が一つでなければならないのでReact.Fragmentで囲む
    <React.Fragment>
      <div>counter: { this.state.count }</div>
      <button onClick={this.handlePlusButton}>+1</button>
      <button onClick={this.handleMinusButton}>-1</button>
    </React.Fragment>
    )
  }
}

export default App;
