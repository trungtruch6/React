import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      action: "",
    };
  }

  fetchData = () => {
    fetch(`https://reqres.in/api/${this.state.action}`)
      .then((res) => console.log({ res }))
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevState, prevProps) {
    if (this.state.action !== prevProps.action) {
      this.fetchData();
    }

    if (this.state.count !== prevState.count) {
      document.title = `Your clicked ${this.state.count} times`;
    }
  }

  onClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  onClickAction = (data) => {
    console.log(data);
    this.setState({ action: data });
  };

  // onChange = (e) => {
  //   this.setState({ name: { name: e.target.value } });
  // };
  render() {
    return (
      <>
        <div>Class Component</div>
        <p>How many times when you click a button: {this.state.count}</p>
        <button onClick={this.onClick}>Click here</button>
        <button onClick={() => this.onClickAction("user")}>Action User</button>
        <button onClick={() => this.onClickAction("comment")}>
          Action Comment
        </button>
        {/*
        <div> Get user info in Class Component</div>
        <input
          type="text"
          name="name"
          placeholder="Your name here!"
          onChange={this.onChange}
        />
        <p> Your name show here: {JSON.stringify(this.state.name)}</p>
        */}
      </>
    );
  }
}
