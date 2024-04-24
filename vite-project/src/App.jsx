import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        {/* Your site's header here */}
      </header>
      <main>
        <Outlet /> {/* This is where the routed pages will be displayed */}
      </main>
      <footer>
        {/* Your site's footer here */}
      </footer>
    </div>
  );
};

export default App;
