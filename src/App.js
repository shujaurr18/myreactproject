import React from 'react';
import './App.css';
import Dineer from './dinner.js';
import School from './school.js'
function App() {
  return (
    <div className="App">
    <h3>hy i m shuja ur rehman</h3>
   <Dineer dishname="wating for dish" sweetdish="rass malai" />
   <hr>stop </hr>
   <Dineer dishname="baryani" sweetdish="rass malai" />
    <br> </br>
   <Dineer dishname="nehari" sweetdish="ice caream" />
    <School schoolname= "alnoorschool" />
</div>
  );
}

export default App;
