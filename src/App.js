import React from 'react';
import logo from './logo.svg';
import Change from './Changer'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome from Sana Alvi
        </p>
        <Change Changer={p} />
      </header>
    </div>
  );
}
export default App;