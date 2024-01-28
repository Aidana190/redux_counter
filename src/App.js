import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreament, increament, reset } from "./store/counterSlice";
import ClickCounter from "./store/clickCounter";

const App = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <ClickCounter count={counter} />
      <div className="counter">
        <button className="decrease" onClick={() => dispatch(decreament())}>
          -
        </button>
        <div className="count">{counter}</div>
        <button className="increase" onClick={() => dispatch(increament())}>
          +
        </button>
      </div>
      <button className="reset" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
};

export default App;
