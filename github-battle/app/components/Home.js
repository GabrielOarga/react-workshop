var React = require('react');
var Link = require('react-router-dom').Link;
var testImage = require('../resources/media/github_logo.png');

class Home extends React.Component {
  render() {

    return (
      <div className='home-container'>
        <img className="section-image" alt="Image: Descriptive Photo" src={testImage} />
        <h1>Github Battle: Battle your friends!</h1>
        <Link className='button' to='/battle'>
          Battle
        </Link>
      </div>
    )
  }
}

module.exports = Home;