import React from 'react';
import { battle } from '../utils/API';

class Results extends React.Component {
  state = {
    winner: null,
    loser: null,
    loading: true,
    error: null,
  };

  componentDidMount() {
    const { playerOne, playerTwo } = this.props;
    battle([playerOne, playerTwo]).then((results) => {
      this.setState(() => ({
        winner: results[0],
        loser: results[1],
        loading: false,
      }));
    });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <h1>LOADING</h1>
        ) : (
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        )}
      </div>
    );
  }
}

export default Results;
