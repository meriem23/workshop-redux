import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

const AppHooks = () => {
  const counter = useSelector((state) => state.CounterReducer);
  console.log(counter);
  const dispatch = useDispatch();
  return (
    <div className="App-header">
      <h1>Hello</h1>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
        >
          ADD 10
        </button>
        <p>{counter.count}</p>
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch({ type: "ADDTEN" });
          }}
        >
          Reset{" "}
        </button>
      </div>
      <div>
        <p>{counter.name}</p>
      </div>
    </div>
  );
};
export default AppHooks;
