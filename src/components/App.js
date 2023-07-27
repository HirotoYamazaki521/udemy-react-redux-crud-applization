import React, { Component } from "react";
import { connect } from "react";

import {increment, decrement} from "../actions";

class App extends Component{
  render(){
    const props = this.props;

    return (
      // returnで返すjsxは親が一つでなければならないのでReact.Fragmentで囲む
    <React.Fragment>
      <div>value: { props.value }</div>
      <button onClick={props.increament}>+1</button>
      <button onClick={props.decrement}>-1</button>
    </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value });

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// })

const mapDispatchToProps = ({ increment, decrement })

export default connect(mapStateToProps, mapDispatchToProps)(App);
