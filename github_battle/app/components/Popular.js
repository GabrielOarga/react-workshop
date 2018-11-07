var React = require('react');
var PropTypes = require('prop-types')

function SelectLanguage (props) { /*Stateless functional component*/
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

  return (
    <ul className='languages'>
      {languages.map((lang) => { /* Arrow function preserves 'this' */
        return (
          <li
            style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
            key={lang}
            onClick={
              /*
                  This will create a new updateLanguage function and pass it
                  a context 'null' (because we already did it in the constructor)
                  and a parameter 'lang'
              */
              props.onSelect.bind(null, lang)
            }
          >
            {lang}
          </li>
        )
      })}
  </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    }

    //Binds the 'this' keyword of the updateLanguage function
    //to the context of the Popular object.
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
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    )
  }
}

module.exports = Popular;