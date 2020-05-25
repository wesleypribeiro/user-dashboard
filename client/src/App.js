import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import teste from './teste';

function App() {
  return (
    <div className='main-container'>
      <div className='sidebar'>
        <p>sidebar</p>
      </div>
      <div className="main">
        <div className="header">
          <p>header</p>
          <p>logout</p>
        </div>
        <div className="main-content">
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={teste} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
