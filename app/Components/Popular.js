import React from 'react';
import PropTypes from 'prop-types';
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
    const { repos } = this.state;
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
    const { repos, error, selectedLang } = this.state;
    return !repos[selectedLang] && error === null;
  };

  render() {
    const { selectedLanguage, repos, error } = this.state;
    return (
      <React.Fragment>
        <LanguagesNav
          selectedLanguage={selectedLanguage}
          updateLanguage={this.updateLanguage}
        />
        {this.isLoading() && <h2>Loading...</h2>}
        {error && <p>{error}</p>}
        {repos[selectedLanguage] && (
          <pre>{JSON.stringify(repos[selectedLanguage], null, 2)}</pre>
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
