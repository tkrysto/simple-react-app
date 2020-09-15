import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    //imageUrl: 'https://picsum.photos/200'
  };
  /*styles = {
    fontSize: 10,
    fontWeight: "bold",
  };*/

  renderTags() {
    if (this.state.tags.length === 0) return <p>no tags</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  //   constructor() { //replaced by arrow function syntax as seen in the handleIncrement function below
  //       super();
  //       this.handleIncrement = this.handleIncrement.bind(this)
  //   }
  handleIncrement = (product) => {
    console.log("increment clicked", this);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span /*style={{fontSize: 10}}*/ className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-small"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
