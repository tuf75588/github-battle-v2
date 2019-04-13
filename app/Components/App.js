import React from 'react';
import Popular from './Popular';
import Nav from './Nav';
import '../index.css';

function App(props) {
  return (
    <div className='container'>
      <Nav />
      <Popular />
    </div>
  );
}

export default App;
