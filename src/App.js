import React from 'react';
import Navbar from './components/Navbar';
import QuoteCards from './components/QuoteCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteCards />
      <QuoteCards />
    </div>
  );
}

export default App;
