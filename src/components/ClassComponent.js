import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      action: "",
      data: [],
    };
  }

  fetchData() {
    fetch(`https://reqres.in/api/${this.state.action}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data.data || [] });
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count)
      document.title = `This is title was clicked: ${this.state.count} times`;
    if (this.state.action !== prevState.action) {
      if (this.state.action) this.fetchData();
    }
  }
  componentDidMount() {
    if (this.state.action) this.fetchData();
  }

  onClick = (data) => {
    this.setState({
      action: data,
    });
  };
  render() {
    return (
      <>
        <div>ClassComponent</div>
        <p>You was clicked: {this.state.count} times</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click here to add a number
        </button>
        <p>What is action set: {this.state.action}</p>
        <button onClick={() => this.onClick("users")}>Add Users</button>
        <button onClick={() => this.onClick("comment")}>Add Comment</button>
        <div>
          <p>This is the list of colors:</p>
          <ul>
            {this.state.data.map((item) => (
              <li key={item.id}>
                <strong>Name:</strong> {item.name}, <strong>Year:</strong>{" "}
                {item.year}, <strong>Color:</strong> {item.color},{" "}
                <strong>Pantone Value:</strong> {item.pantone_value}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
