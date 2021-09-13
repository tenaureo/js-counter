import React, {useState} from 'react';
import './App.css';

function App(){

const [nr, setNr] = useState(0);

const plusOne = () => {
  setNr(nr + 1);
}

const minusOne = () => {
  setNr(nr - 1);
}

  return (
    <div className="App">
      <h1>{nr}</h1>
      <button onClick={plusOne}>+1</button>
      <button onClick={minusOne}>-1</button>
    </div>  
  );
  
}

export default App;
