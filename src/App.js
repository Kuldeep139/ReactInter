import './App.css';
import ClassComp from "./Day1/ClassComponent"
import FunctionalComp from "./Day1/FunctionalComponent"
import Props from "./Day2/props/Props"
import Counter from './Day3/UseEffectHook';
import States from './Day3/UseStateHook';

function App() {
  return (
    <div className="App">
    <ClassComp/>
    <FunctionalComp/>
    <Props/>
    <States/>
    <Counter/>
    </div>
  );
}

export default App;
