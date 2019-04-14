import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import fetchPopularRepos from '../utils/API';

function LanguagesNav({ selectedLanguage, updateLanguage }) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className='flex-center'>
      {languages.map((language, index) => (
        <li key={index}>
          <button
            className='btn-clear nav-link'
            type='button'
            onClick={() => updateLanguage(language)}
            style={
              language === selectedLanguage
                ? { color: 'rgb(187, 46, 31)' }
                : null
            }
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}

function RepoGrid({ repos }) {
  return (
    <ul className='grid space-around'>
      {repos.map((repo, index) => (
        <Card
          index={index}
          login={repo.owner.login}
          forks={repo.forks}
          open_issues={repo.open_issues}
          url={repo.html_url}
          key={repo.html_url}
          avatar={repo.owner.avatar_url}
          stars={repo.stargazers_count}
        />
      ))}
    </ul>
  );
}

class Popular extends React.Component {
  state = {
    selectedLanguage: 'All',
    repos: {},
    error: null,
  };

  componentDidMount() {
    const { selectedLanguage } = this.state;
    this.updateLanguage(selectedLanguage);
  }

  updateLanguage = (selectedLang) => {
    const { repos, error } = this.state;
    this.setState(() => ({
      selectedLanguage: selectedLang,
      error: null,
    }));
    if (!repos[selectedLang]) {
      fetchPopularRepos(selectedLang)
        .then((data) => {
          this.setState((prevState) => ({
            repos: {
              ...prevState.repos,
              [selectedLang]: data,
            },
          }));
        })
        .catch(() => {
          console.warn('Error fetching repos: ', error);

          this.setState({
            error: `There was an error fetching the repositories.`,
          });
        });
    }
  };

  isLoading = () => {
    const { repos, error, selectedLanguage } = this.state;
    return !repos[selectedLanguage] && error === null;
  };

  render() {
    const { selectedLanguage, repos, error } = this.state;
    return (
      <React.Fragment>
        <LanguagesNav
          selectedLanguage={selectedLanguage}
          updateLanguage={this.updateLanguage}
        />
        {this.isLoading() && <p>LOADING</p>}
        {error && <p>{error}</p>}
        {repos[selectedLanguage] && (
          <RepoGrid repos={repos[selectedLanguage]} />
        )}
      </React.Fragment>
    );
  }
}

LanguagesNav.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired,
};

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Popular;
