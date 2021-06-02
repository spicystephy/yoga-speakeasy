import React from "react";
import { Button } from "react-bootstrap";
import "./Counter.css";

class Counter extends React.Component {
  state = {
    count: 10,
    disable: false,
  };

  handleDecrement = () => {
    if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
    else this.setState({ disable: true })
  };
  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-red">
          Sign Up For Classes!
        </div>
        <div className="card-body">
          <p className="card-text"> Mats Left : {this.state.count}</p>
          <Button className="btn btn-danger" onClick={this.handleDecrement}>
            Spots
          </Button>
        </div>
      </div>
    );
  }
}
const Button = (props) => <button {...props} />;
const App = () => <Counter />;
ReactDOM.render(<App />, document.getElementById('root'));

export default Counter;
