import React from 'react';

class Results extends React.Component {
  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    const playerOne = params.get('playerOne');
    const playerTwo = params.get('playerTwo');
    console.log({ playerOne, playerTwo });
  }

  render() {
    return <div>RESULTS PAGE</div>;
  }
}

export default Results;
