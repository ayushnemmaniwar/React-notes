import logo from './logo.svg';
import './App.css';
import Props from './components/Props';
import UseState from './components/UseState';
import Parent from './components/Parent'
import Stylesheet from './components/Stylesheet'
import Forms from './components/Forms'
import HookCounter from './components/HookCounter'
import HookCounter3 from './components/HookCounter3';
import Arrays from './components/Arrays';
import UseEffect from './components/UseEffect';
import SetTime from './components/SetTime'
import DataFetching from './components/DataFetching'
function App() {
  
  return (
    <div className="App">
      <DataFetching/>
      
      {/* settime */}
      {/* <SetTime/> */}
      
      {/* UseEffect is used to update the title */}
      {/* <UseEffect/> */}

      {/* arrays */}
      {/* <Arrays/> */}

      {/* HookCounter3 */}
      {/* <HookCounter3/> */}

      {/* HookCounter */}
      {/* <HookCounter/> */}
      
      {/* Forms  */}
      {/* <Forms/> */}
      
      {/* {Styles} */}
      {/* <Stylesheet primary="true"/> */}
      
      {/* parent child relation */}
      {/* <Parent/> */}
      
      {/* UseStates */}
      {/* <UseState/> */}
      
      {/* props */}
      {/* <Props name="Ram">
      <p>Ram is great</p>
      </Props>
      <Props name="ravi">
      <button>Action</button>
      </Props>
      <Props name="raju"/> */}
    </div>
  );
}

export default App;
