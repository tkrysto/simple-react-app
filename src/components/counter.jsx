import React, { Component } from "react";

class Counter extends Component {
  // controlled component -- everything controlled by parent

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
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProp ", prevProps);
    console.log("prevState ", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //ajax call to get data from server
      console.log("changed");
    }
  }
  componentWillUnmount() {
    console.log("unmount");
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <span /*style={{fontSize: 10}}*/ className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
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
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
