import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Popular from './Popular';
import Results from './Results';
import Nav from './Nav';
import '../index.css';

import Battle from './Battle';

function App() {
  return (
    <div className='container'>
      <Battle />
    </div>
  );
}

export default App;
