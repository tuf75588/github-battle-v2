import React from 'react';
import PropTypes from 'prop-types';
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
} from 'react-icons/fa';
import { fetchPopularRepos } from '../utils/api';
import Loading from './Loading';

function LanguagesNav({ selected, onUpdateLanguage }) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className='flex-center'>
      {languages.map((lang, indx) => (
        <li key={lang}>
          <button
            className='btn-clear nav-link'
            onClick={() => onUpdateLanguage(lang)}
            style={lang === selected ? { color: 'rgb(187,46,31)' } : null}
          >
            {lang}
          </button>
        </li>
      ))}
    </ul>
  );
}

function ReposGrid({ repos }) {
  // const { forks, owner } = repos;
  console.log(repos);
  return (
    <ul className='grid space-around'>
      {repos.map((repo, index) => {
        const {
          name,
          open_issues,
          html_url,
          forks,
          owner,
          stargazers_count,
          id,
        } = repo;
        const { login, avatar_url } = owner;
        return (
          <li key={id} className='card bg-light'>
            <h4 className='header-lg center-text'>{index + 1}</h4>
            <img
              src={avatar_url}
              alt={`avatar for ${login}`}
              className='avatar'
            />
            <h2 className='center-text'>
              <a href={html_url} className='link'>
                {login}
              </a>
            </h2>
            <ul className='card-list'>
              <li>
                <FaUser color='rgb(255, 191, 116)' size={22} />
                <a href={`https://github.com/${login}`}>{login}</a>
              </li>
              <li>
                <FaStar color='rgb(255, 215, 0)' size={22} />
                {stargazers_count.toLocaleString()} stars
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

ReposGrid.propTypes = {
  repos: PropTypes.array.isRequired,
};

class Popular extends React.Component {
  state = {
    selectedLanguage: 'All',
    repos: {},
    error: null,
  };

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage = (selectedLanguage) => {
    // goal will be to cache repos if they are re-selected on the nav bar.
    this.setState(() => ({
      error: null,
      selectedLanguage,
    }));
    // if the selected language is not a property on our repos object.
    if (!this.state.repos[selectedLanguage]) {
      fetchPopularRepos(selectedLanguage)
        .then((data) => {
          this.setState(({ repos }) => ({
            repos: {
              ...repos,
              [selectedLanguage]: data,
            },
          }));
        })
        .catch((error) => {
          console.warn('there was an error in fetching the repos');
          this.setState({ error });
        });
    }
  };

  isLoading = () => {
    const { repos, selectedLanguage, error } = this.state;
    return !repos[selectedLanguage] && error === null;
  };

  render() {
    const { repos, selectedLanguage } = this.state;
    return (
      <React.Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />
        {this.isLoading() && <Loading text='Fetching Repos' />}
        {this.state.error && (
          <p className='error center-text'>{this.state.error}</p>
        )}
        {repos[selectedLanguage] && (
          <ReposGrid repos={repos[selectedLanguage]} />
        )}
      </React.Fragment>
    );
  }
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
};

export default Popular;
