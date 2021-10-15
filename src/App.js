
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterSlice"
import { addApple, sellApple } from "./redux/appleSlice";


function App() {
  const { count } = useSelector(state => state.counter);
  const { apples } = useSelector(state => state.apples);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <hr />
      <h1>Total Apples: {apples}</h1>
      <button onClick={() => dispatch(addApple())}>Add Apples</button>
      <button onClick={() => dispatch(sellApple())}>Sell Apples</button>

    </div>
  );
}

export default App;
