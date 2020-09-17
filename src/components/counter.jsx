import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"],
    //imageUrl: 'https://picsum.photos/200'
  };
  /*styles = {
    fontSize: 10,
    fontWeight: "bold",
  };*/

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>no tags</p>;

  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }
  //   constructor() { //replaced by arrow function syntax as seen in the handleIncrement function below
  //       super();
  //       this.handleIncrement = this.handleIncrement.bind(this)
  //   }
  handleIncrement = (product) => {
    console.log("increment clicked", this);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <span /*style={{fontSize: 10}}*/ className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            onClick={() => this.handleIncrement({ id: 1 })}
            className="btn btn-secondary btn-small"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
