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
      <Router>
        <ThemeProvider value={this.state}>
          <div className={theme}>
            <div className='container'>
              <Nav />
              <Route path='/' exact component={Popular} />
              <Route path='/battle' exact component={Battle} />
              <Route path='/battle/results' component={Results} />
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
