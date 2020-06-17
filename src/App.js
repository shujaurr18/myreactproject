import React,{useState} from 'react';
import './App.css';
function App() {

 let [count , setcount] = useState(1);



  return (
    <div className="App">
    <h1>The value of counter is:{count}</h1>
    <button onClick={()=> setcount(4)
    }>update counter</button>
</div>
  );
}

export default App;
