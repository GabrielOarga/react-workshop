var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

/* Stateless functional component */
function LanguageTab(props) {
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
function LanguageBar(props) {
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

function RepoGrid (props) {
  return (
    <ul className='popular-list'>
      {props.repos.map((repo, index) => {
        return (
          <li key={repo.name} className='popular-item'>
            <div className='popular-rank'>#{index + 1}</div>
            <ul className='space-list-items'>
              <li>
                <img
                  className='avatar'
                  src={repo.owner.avatar_url}
                  alt={'Avatar for ' + repo.owner.login}
                />
              </li>
              <li><a href={repo.html_url}>repo.name</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
}

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    }

    /*
      Binds the 'this' keyword of the updateLanguage function
      to the context of the Popular object.
    */
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() { /* Get's called when the component mounts to DOM */
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState(function() {
      return {
        selectedLanguage: lang,
      }
    });

    api.fetchPopularRepos(lang)
    .then((repos) => {
      this.setState(function () {
        return {
          repos: repos
        }
      })
    })
  }

  render() {
    return (
      <div>
        <LanguageBar
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {
          !this.state.repos
          ? <p>LOADING</p>
          : <RepoGrid repos={this.state.repos} />
        }
      </div>
    )
  }
}

module.exports = Popular;