import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Popular from './Popular';
import Results from './Results';
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
          <Route path='/battle' exact component={Battle} />
          <Route path='/battle/results' component={Results} />
          <Route render={() => <h1>Four oh Four</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
