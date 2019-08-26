/* eslint-disable no-shadow */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeContext } from '../contexts/theme';

import Nav from './Nav';
import '../index.css';
import Loading from './Loading';

const Popular = React.lazy(() => import('./Popular'));
const Battle = React.lazy(() => import('./Battle'));
const Results = React.lazy(() => import('./Results'));

function App() {
  const [theme, toggleTheme] = React.useState('dark');
  function toggle() {
    toggleTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  }
  const value = React.useMemo(
    () => ({
      theme,
      toggle,
    }),
    [theme]
  );

  return (
    <Router>
      <ThemeContext.Provider value={value}>
        <div className={theme}>
          <div className='container'>
            <Nav />
            <React.Suspense fallback={<Loading />}>
              <Switch>
                <Route path='/' exact component={Popular} />
                <Route path='/battle' exact component={Battle} />
                <Route path='/battle/results' component={Results} />
                <Route
                  render={() => <h1>Sorry, but you've taken a wrong turn!</h1>}
                />
              </Switch>
            </React.Suspense>
          </div>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}
export default App;
