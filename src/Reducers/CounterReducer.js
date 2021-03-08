let initiState = {
  count: 0,
  name: "Ali",
};

const CounterReducer = (state = initiState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    case "ADDTEN":
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

export default CounterReducer;
