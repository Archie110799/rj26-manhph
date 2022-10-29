import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const num : number = 12
  const styles : object = {
    color: 'red', fontSize:'18px'
  }
  console.log(num);
  
  return (
    <div style={styles} className="color__blue">
      <h1>{num}</h1>
      <h1>Headding</h1>
    </div>
  );
}

export default App;
