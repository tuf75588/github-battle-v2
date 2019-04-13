import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
const h1 = React.createElement('h1', null, 'Hello World!');
const rootElement = document.getElementById('app');

render(<App />, rootElement);
