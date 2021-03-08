import { connect } from "react-redux";
import "./App.css";

function App(props) {
  console.log(props);
  return (
    <div className="App-header">
      <div>
        <h1>Hello</h1>
        <button onClick={props.btnPlus}>+</button>
        <button onClick={props.btnAddTen}>ADD 10</button>
        <p>{props.counter.count}</p>
        <button onClick={props.btnMoins}>-</button>
        <button onClick={props.btnReset}>Reset</button>
      </div>
      <div>
        <p>{props.counter.name}</p>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    counter: state.CounterReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    btnPlus: () => {
      dispatch({ type: "INCREMENT" });
    },
    btnMoins: () => {
      dispatch({ type: "DECREMENT" });
    },
    btnReset: () => {
      dispatch({ type: "RESET" });
    },
    btnAddTen: () => {
      dispatch({ type: "ADDTEN", payload: 10 });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
