import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Popular from './Popular';
import Nav from './Nav';
import '../index.css';
import Battle from './Battle';

function App() {
  return (
    <Router>
      <div className='container'>
        <Nav />

        <Switch>
          <Route path='/' exact component={Popular} />
          <Route path='/battle' component={Battle} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
