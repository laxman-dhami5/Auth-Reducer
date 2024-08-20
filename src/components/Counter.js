import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
 const counter= useSelector(state=>state.counter)
 const dispatch=useDispatch()

 const incrementHandler=()=>{
  dispatch({type:'increment'})
 }
 const decrementHandler=()=>{
  dispatch({type:'decrement'})
 }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div style={{margin:'1rem'}}>
        <button type='button' onClick={incrementHandler} style={{margin:'1rem'}}>Increment</button>
        <button type='button' onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
