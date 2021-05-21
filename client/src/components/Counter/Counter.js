import React from "react";
import { Button } from "react-bootstrap";
import './Counter.css'

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 10
  };

//   // handleIncrement increases this.state.count by 1
//   handleIncrement = () => {
//     // We always use the setState method to update a component's state
//     this.setState({ count: this.state.count + 1 });
//   };

  // handleDecrement decreases this.state.count by 1
  handleDecrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count - 1 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-red">
          Sign Up For Classes!
        </div>
        <div className="card-body">
          <p className="card-text"> Mats Left : {this.state.count}</p>
          {/* <Button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </Button>{" "} */}
          <Button className="btn btn-danger" onClick={this.handleDecrement}>
            Spots
          </Button>
        </div>
      </div>
    );
  }
}

export default Counter;
