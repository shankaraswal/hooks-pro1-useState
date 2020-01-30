import React from 'react';
import './App.css';
import Counter  from './components/Counter'
import CounterHook from './components/CounterHook';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <CounterHook />
    </div>
  );
}

export default App;
