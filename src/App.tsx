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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* 
      1) УДАЛИТЬ ВСЕ ЛИШНИЕ ФАЙЛЫ
      2) ДОБАВИТЬ СТАНДАРТНЫЕ СТИЛИ
      3) СОЗДАТЬ КОМПОНЕНТ ОСНОВНОГО ОКНА
      4) СОЗЛДАТЬ КОМПОНЕНТ САМОГО СЧЕТЧИКА С МЕНЯЮЩИМИСЯ ЧИСЛАМИ
      5) СОЗДАТЬ КОМПОНЕНТ КНОПОК, КОТОРАЯ ФУНКЦИЕЙ ПРИНИМАЕТ onClick (ИНКР И ДЕКР)
      */}
    </div>
  );
}

export default App;
