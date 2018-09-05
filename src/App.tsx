import * as React from 'react';
import './App.css';
import AppState from './store';
import TimerView from './Timer';

const appState = new AppState();

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <TimerView appState={appState} />
      </div>
    );
  }
}

export default App;
