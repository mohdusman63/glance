import React, { Component } from "react";

class Program1 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      val: "",
      list: [],
    };
    this.add = this.add.bind(this);
    this.formHandler = this.formHandler.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  add() {
    const userInput = {
      id: Math.random(),
      val: this.state.val,
    };
    this.setState({
      list: [...this.state.list, userInput],
    });
  }
  formHandler(e) {
    this.setState({ val: e.target.value });
  }
  handleDelete(key) {
    const updated = this.state.list.filter((val) => val.id !== key);
    console.log(updated);
    this.setState({ list: updated });
  }
  render() {
    return (
      <>
        {this.state.count}
        <h1>hellow</h1>
        <input type="text" onChange={this.formHandler} />
        <button onClick={this.add}>+</button>
        <ul>
          {this.state.list.map((ele, index) => (
            <li key={ele.id} onClick={() => this.handleDelete(ele.id)}>
              {ele.val}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Program1;
