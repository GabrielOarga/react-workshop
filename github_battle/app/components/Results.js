var React = require('react');
var api = require('../utils/api')
var querryString = require('query-string');

class Results extends React.Component {
  /*
  constructor(props) {
    super(props);

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true,
    }
  }

  componentDidMount() {
    var players = querryString.parse(this.props.location.search)

    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]) 
      .then(function (results) {
        console.log(results);
        console.log('Winner: ' + results[0].profile.username);
        console.log('Looser: ' + results[1].profile.username);
      });
  }

  render() {
    var error = this.state.error;
    var winner = this.state.winner;
    var loser = this.state.loser;
    var loading = this.state.loading;

    if(loading) {
      return <p>Loading...</p>
    }
    return (
      <div>Results</div>
    )
  }
  */
  render () {
    return (
      <div>RESULTS</div>
    )
  }
}

module.exports = Results;