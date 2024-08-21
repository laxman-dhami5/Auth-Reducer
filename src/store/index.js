import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlice'
import authReducer from './AuthReducer'


const store = configureStore({
  reducer: { 
    counter:counterReducer,
     auth: authReducer,
     
    }
});


export default store;
