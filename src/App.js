
import './App.css';

import Gradnik from './Gradnik.js';

function App() {
    function dolf(num){
        return num-2;
    }
    function gorf(num){
        return num+2;
    }
  return (
    <div className="App">
        <Gradnik gor="count up" dol="count down" gorf={(num)=> num+2} dolf={dolf}/>
        <Gradnik gor="square" dol="root" gorf={(num)=> num*num} dolf={(num)=> Math.sqrt(num)}/>
    </div>
  );
}

export default App;
