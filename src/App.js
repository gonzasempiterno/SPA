import React from 'react';
import Navbar from './components/Navbar';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      </header>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
    </div>
  );
}

export default App;
