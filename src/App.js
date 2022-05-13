import React from 'react';
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
import ComponentC from './components/useContext/ComponentC';

export const AuthorContext = React.createContext();
export const BookContext = React.createContext();

// useReducer


function App() {
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

      {/* useReducer Hook start */}

    </div>
  );
}

export default App;
