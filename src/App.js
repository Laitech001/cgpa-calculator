import './App.css';
import './index.css'
import { useState } from 'react';
import Header from './header'
import GpaCalculator from './Gpa-calculator';
import CgpaCalculator from './Cgpa-calculator';

function App() {

  return (
    <div className="App">
      <Header />

      <GpaCalculator />

      <CgpaCalculator />
    </div>
  );  
}

export default App;
