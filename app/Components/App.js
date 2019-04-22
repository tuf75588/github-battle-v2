import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Popular from './Popular';
import { ThemeProvider } from '../contexts/theme';
import Results from './Results';
import Nav from './Nav';
import '../index.css';

import Battle from './Battle';

class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState((prevState) => ({
        theme: prevState.theme === 'light' ? 'dark' : 'light',
      }));
    },
  };

  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className='container'>
          <Battle />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
