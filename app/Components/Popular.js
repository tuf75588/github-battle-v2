import React from 'react';
import PropTypes from 'prop-types';

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
    selectedLanguage: null,
  };

  updateLanguage = (selectedLang) => {
    this.setState(() => ({
      selectedLanguage: selectedLang,
    }));
  };

  render() {
    const { selectedLanguage } = this.state;
    return (
      <React.Fragment>
        <LanguagesNav
          selectedLanguage={selectedLanguage}
          updateLanguage={this.updateLanguage}
        />
      </React.Fragment>
    );
  }
}

LanguagesNav.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired,
};

export default Popular;
