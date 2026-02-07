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

      <footer>
        <p>The website was created by Laitech team. for more enqueries, message us on <a href='#'>+2347062639160</a></p>
      </footer>
    </div>
  );  
}

export default App;
