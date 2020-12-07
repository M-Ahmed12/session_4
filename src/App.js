import React, {useState} from 'react';
import {Message} from './Message.js';
import './App.css';

export default function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(false)

  
  return (
    <div className= {`box ${isMorning ? 'daylight' : ''}`}>
      <h1>have a good {isMorning ? 'Morning' : 'Night'}</h1>

      <Message counter={count}/>
      <br/>
      <button onClick={()=> setCount(count + 1)}> update counter</button>
      <button onClick={()=> setMorning(!isMorning)}> update day </button>
    </div>
  );
}


