
import './App.css';


import Body from './Body.js';
import  { ChakraProvider } from "@chakra-ui/react";

function App() {
    {/*function dolf(num){
        return num-2;
    }
    function gorf(num){
        return num+2;
    }
    */}
  return (
      <ChakraProvider>
        <div className="App">
            <h1>Primerjanje živali</h1>
            <Body />
        </div>
      </ChakraProvider>
  );
}

export default App;
