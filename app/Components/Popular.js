import React from 'react';
import PropTypes from 'prop-types';
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
} from 'react-icons/fa';

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
  console.log(`REPOGRID`, repos);
  return (
    <ul className='grid space-around'>
      {repos.map((repo, index) => {
        const { name, open_issues, forks } = repo;
        const { login, avatar_url } = repo.owner;
        return (
          <li key={repo.html_url} className='repo bg-light'>
            <h4 className='header-lg center-text'>#{index + 1}</h4>
            <img
              src={avatar_url}
              alt={`avatar for ${login}`}
              className='avatar'
            />
            <h2 className='center-text'>
              <a href={repo.html_url} className='link'>
                {login}
              </a>
            </h2>
            <ul className='card-list'>
              <li>
                <FaUser color='rgb(255, 191, 116)' size={22} />
                <a href={`https://www.github.com/${login}`}>{login}</a>
              </li>
              <li>
                <FaStar color='rgb(255, 215, 0)' size={22} />
                {repo.stargazers_count.toLocaleString()} stars
              </li>
              <li>
                <FaCodeBranch color='rgb(129, 195, 245)' size={22} />
                {forks.toLocaleString()} forks
              </li>
              <li>
                <FaExclamationTriangle color='rgb(241, 138, 147)' size={22} />
                {open_issues.toLocaleString()} open
              </li>
            </ul>
          </li>
        );
      })}
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

export default Popular;
