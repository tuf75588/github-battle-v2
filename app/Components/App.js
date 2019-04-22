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
    const { theme } = this.state;
    return (
      <ThemeProvider value={this.state}>
        <div className={theme}>
          <div className='container'>
            <Nav />
            <Battle />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
