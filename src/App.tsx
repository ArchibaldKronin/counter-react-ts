import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Content } from './components/content/content';
import { CounterWindow } from './components/counter-window/counter-window';
import { CounterContainer } from './components/counter-container/counter-container';

function App() {
  return (
    <div className="App">
      <Content>
        <CounterContainer />
      </Content>
    </div>
  );
}

export default App;
