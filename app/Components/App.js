/* eslint-disable react/no-unused-state */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { ThemeProvider } from '../contexts/theme';

import Nav from './Nav';
import '../index.css';
import Loading from './Loading';

const Popular = React.lazy(() => import('./Popular'));
const Battle = React.lazy(() => import('./Battle'));
const Results = React.lazy(() => import('./Results'));
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
              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route path='/' exact component={Popular} />
                  <Route path='/battle' exact component={Battle} />
                  <Route path='/battle/results' component={Results} />
                  <Route
                    render={() => (
                      <h1>Sorry, but you've taken a wrong turn!</h1>
                    )}
                  />
                </Switch>
              </React.Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
