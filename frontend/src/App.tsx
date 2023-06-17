import React, {ReactNode} from 'react';
import './App.css';
import Router from "./components/Router";


export const App = () => {
  return (
    <div className="App">
        <header className="main">
            <Router />
        </header>
    </div>
  );
}

export default App;
