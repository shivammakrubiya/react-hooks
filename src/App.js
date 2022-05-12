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


function App() {
  return (
    <div className="App">

      {/* useState Hook Start */}

      {/* <ClassCounter />
      <UseStateCounter />
      <ClassCounter2 /> 
      <UseStateCounter2 />
      <UseStateObject /> 
      <UseStateArray /> */}

      {/* useState Hook End */}

      {/* useEffect Hook Start */}

      {/* <ClassComponentOne /> */}
      <UseEffectRender />

      {/* useEffect Hook End */}
    </div>
  );
}

export default App;
