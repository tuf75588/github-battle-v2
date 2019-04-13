import React from 'react';
import PropTypes from 'prop-types';
import fetchPopularRepos from '../utils/API';

function LanguagesNav({ selectedLanguage, updateLanguage }) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className='flex-center'>
      {languages.map((language) => (
        <li>
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

class Popular extends React.Component {
  state = {
    selectedLanguage: 'All',
    repos: null,
  };

  componentDidMount() {
    const { selectedLanguage } = this.state;
    fetchPopularRepos(selectedLanguage).then((repos) =>
      this.setState(() => ({
        repos,
      }))
    );
  }

  updateLanguage = (selectedLang) => {
    this.setState(() => ({
      selectedLanguage: selectedLang,
    }));
    fetchPopularRepos(selectedLang).then((repos) => {
      this.setState(() => ({
        repos,
      }));
    });
  };

  render() {
    const { selectedLanguage, repos } = this.state;
    return (
      <React.Fragment>
        <LanguagesNav
          selectedLanguage={selectedLanguage}
          updateLanguage={this.updateLanguage}
        />
        {repos === null ? (
          <h1>Loading...</h1>
        ) : (
          <ul className='repo-grid'>
            {repos.map(({ name }) => (
              <li>{name}</li>
            ))}
          </ul>
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
