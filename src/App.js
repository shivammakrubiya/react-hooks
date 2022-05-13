import React, { useReducer } from 'react';
import './App.css';
// useState
import ClassCounter from './components/useState/classCounter';
import ClassCounter2 from './components/useState/ClassCounter2'
import UseStateArray from './components/useState/UseStateArray';
import UseStateCounter from './components/useState/useStateCounter';
import UseStateCounter2 from './components/useState/UseStateCounter2';
import UseStateObject from './components/useState/UseStateObject';

// useEffect
import ClassComponentOne from './components/useEffect/ClassComponentOne';
import UseEffectRender from './components/useEffect/UseEffectRender';
import ClassComponentMouseMove from './components/useEffect/ClassComponentMouseMove';
import UseEffectMouse from './components/useEffect/UseEffectMouse';
import HookMouse from './components/useEffect/HookMouse';
import ClassIntervalCounter from './components/useEffect/ClassIntervalCounter';
import UseEffectInterval from './components/useEffect/UseEffectInterval';
import UseEffectFetchApi from './components/useEffect/UseEffectFetchApi';

// useContex


// useReducer
import ReducerCount from './components/useReducer/ReducerCount';
import ReducerCount2 from './components/useReducer/ReducerCounter2';
import ReducerMultipleCounter from './components/useReducer/ReducerMultipleCounter';
import ComponentA from './components/useReducer/ReducerWithContext/ComponentA';
import ComponentB from './components/useReducer/ReducerWithContext/ComponentB';
import ComponentC from './components/useReducer/ReducerWithContext/ComponentC';
import StateFetching from './components/useReducer/FetchAPI/SateFetching';
import ReducerFetching from './components/useReducer/FetchAPI/ReducerFetching';

// useCallback
import ParentComponent from './components/useCallback/ParentComponent';


export const AuthorContext = React.createContext();
export const BookContext = React.createContext();
export const CounterContext = React.createContext();

// Reducer for the useContext
const initialState = 0;
function reducer(state, action) {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state
  }
}

function App() {

  // Initialize reducer
  const [count, dispatchCount] = useReducer(reducer, initialState)

  return (
    <div className="App">

      {/* useState Hook Start */}

      {/* 
      <ClassCounter />
      <UseStateCounter />
      <ClassCounter2 /> 
      <UseStateCounter2 />
      <UseStateObject /> 
      <UseStateArray />
       */}

      {/* useState Hook End */}

      {/* useEffect Hook Start */}

      {/*
      <ClassComponentOne /> 
      <UseEffectRender />
      <ClassComponentMouseMove />
      <UseEffectMouse />
      <HookMouse />
      <ClassIntervalCounter />
      <UseEffectInterval />
      <UseEffectFetchApi />
      */}

      {/* useEffect Hook End */}

      {/* useContex Hook start */}

      {/* 
      <AuthorContext.Provider value={'Jules Vern'}>
        <BookContext.Provider value={'Journey to the Centre of the Earth'}>
          <ComponentC />
        </BookContext.Provider>
      </AuthorContext.Provider>
       */}

      {/* useContex Hook End */}

      {/* useReducer Hook start */}

      {/*
       <ReducerCount />
      <ReducerCount2 />
      <ReducerMultipleCounter />
      <CounterContext.Provider
        value={{ ContextCount: count, ContextDispatch: dispatchCount }}
      >
        <div>Count - {count}</div>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CounterContext.Provider>
      <StateFetching />
      <ReducerFetching />
       */}

      {/* useReducer Hook End */}

      {/* useCallback Hook start */}
      <ParentComponent />
      {/* useCallback Hook End */}

    </div>
  );
}

export default App;
