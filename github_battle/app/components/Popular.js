var React = require('react');
var PropTypes = require('prop-types')

/* Stateless functional component */
function LanguageTab (props) {
  return (
    <li
    style={props.lang === props.selectedLanguage ? { color: '#d0021b' } : null}
    onClick={
      /*
        This will create a new updateLanguage function and pass it
        a context 'null' (because we already did it in the constructor)
        and a parameter 'lang'
      */
      props.onSelect.bind(null, props.lang)}
    >
    {props.lang}
  </li>
  )
}

/* PropTypes for LanguageTab */
LanguageTab.propTypes = {
  lang: PropTypes.string.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

/* Stateless functional component */
function LanguageBar (props) {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

  return (
    <ul className='languages'>
      {languages.map((lang) => { /* Arrow functions preserve 'this' */
        return (
          <LanguageTab
            key={lang}
            lang={lang}
            selectedLanguage={props.selectedLanguage}
            onSelect={props.onSelect}
          />
        )
      })}
  </ul>
  )
}

/* PropTypes for LanguageBar */
LanguageBar.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    }

    /*
      Binds the 'this' keyword of the updateLanguage function
      to the context of the Popular object.
    */
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang
      }
    })
  }

  render() {
    return (
      <div>
        <LanguageBar
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    )
  }
}

module.exports = Popular;