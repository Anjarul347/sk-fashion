import React from 'react';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import Homepage from './customer/pages/Homepage';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        <Homepage/>
      </div>
    </div>
  );
}

export default App;
