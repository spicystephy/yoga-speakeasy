import React from "react";
import { Button } from "react-bootstrap";
import "../Counter/Counter.css";
import useStateWithLocalStorage from "../useStateWithLocalStorage";

function Counter() {
  const [count, setCount] = useStateWithLocalStorage(10, "count");

  const addSpotHandler=()=>{
    if(count === 0){
      return;
    }
    setCount(count -1);
  };

  const cancelSpotHandler=()=>{
    if(count === 10){
      return;
    }
    setCount(count +1);
  };
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-red">
          Sign Up For Classes!
        </div>
        <div className="card-body">
          <p className="card-text"> Mats Left : {count}</p>
          <Button className="btn btn-danger" onClick={addSpotHandler}>
          Save my Spot
        </Button>
      <Button className="btn btn-primary" onClick={cancelSpotHandler}>
        Cancel my Spot
      </Button>
        </div>
      </div>
    );
  }

// const Button = (props) => <button {...props} />;
// const App = () => <Counter />;
// ReactDOM.render(<App />, document.getElementById('root'));

export default Counter;
