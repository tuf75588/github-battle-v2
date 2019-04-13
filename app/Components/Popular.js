import React from 'react';

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: null,
    };
  }

  updateLanguage = (selectedLang) => {
    this.setState(() => ({
      selectedLanguage: selectedLang,
    }));
  };

  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    const { selectedLanguage } = this.state;
    return (
      <ul className='flex-center'>
        {languages.map((lang, index) => (
          <li>
            <button
              type='button'
              className='btn-clear nav-link'
              onClick={() => this.updateLanguage(lang)}
              style={
                lang === selectedLanguage ? { color: 'rgb(187, 46, 31)' } : null
              }
            >
              {lang}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default Popular;
