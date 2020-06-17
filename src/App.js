import React,{useState} from 'react';
import './App.css';
function App() {

 let [count , setcount] = useState(0);



  return (
    <div className="App">
    <h1>The value of counter is:{count}</h1>
    <button onClick={()=> setcount(count + 1)
    }>update counter</button>
</div>
  );
}

export default App;
