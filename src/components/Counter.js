import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterAction } from '../store/CounterSlice'

const Counter = () => {
 const counter= useSelector(state=>state.counter.counter)
 const dispatch=useDispatch()
  const show= useSelector(state=>state.counter.showCounter)

 const incrementHandler=()=>{
  dispatch(counterAction.increment())
 }
 const decrementHandler=()=>{
  dispatch(counterAction.decrement())
 }
 const increaseHandler=()=>{
  dispatch(counterAction.increase(5))
 }

  const toggleCounterHandler = () => {
    dispatch(counterAction.toogleCounter())
  };
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div> }
      <div style={{margin:'1rem'}}>
        <button type='button' onClick={incrementHandler} style={{margin:'1rem'}}>Increment</button>
        <button style={{margin:'1rem'}} type='button' onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase By5</button>
      </div>
     <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
