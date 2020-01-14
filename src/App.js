import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar.js'
import HeaderZero from './HeaderZero.js'

function App() {
  const [currentHeader, setHeader] = useState(<HeaderZero/>);
  return (
    <div className="App">
      <Navbar header={currentHeader} setter={setHeader}/>
      {currentHeader}
    </div>
  );
}

export default App;
