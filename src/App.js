import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
import QuoteList from './components/QuoteList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteCard 
      quote="Remember the time he ate my goldfish? And you lied and said I never had a goldfish. Then why did I have the bowl, Bart? Why did I have the bowl?"  
      character="Milhouse Van Houten" 
      image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002"
      />
      <QuoteCard
        quote="I believe the children are the future... Unless we stop them now!"
        character="Homer Simpson"
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
      />
      <QuoteCard quote="Shoplifting is a victimless crime, like punching someone in the dark." />
      <QuoteList />
    </div>
  );
}

export default App;
