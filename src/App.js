import React,{useState} from 'react';

import {message} from './message.js';
import './App.css';
function App() {

 let [count , setcount] = useState(0);

let [ismorning ,setmorning]= useState(true)

  return (
<h1>Day time = {ismorning ? 'morning' : 'night'}</h1>
<div className="box">
    <message counter={count}/>
    <h1>The value of counter is:{count}</h1>
    <button onClick={()=> setcount(count + 1)
    }>update counter</button>
</div>
  );
}

export default App;
