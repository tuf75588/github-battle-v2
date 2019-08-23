import React from "react";
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import Results from "./Results";
import { ThemeConsumer } from "../contexts/theme";
import { Link } from "react-router-dom";
function Instructions(props) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className='instructions-container'>
          <h1 className='header-lg center-text'>Instructions</h1>
          <ol className='container-sm grid center-text battle-instructions'>
            <li>
              <h3 className='header-sm'>Enter Two Github Users</h3>
              <FaUserFriends
                className={`bg-${theme}`}
                color='rgb(255,191,116)'
                size={140}
              />
            </li>
            <li>
              <h3 className='header-sm'>Battle</h3>
              <FaUserFriends
                className={`bg-${theme}`}
                color='#727272'
                size={140}
              />
            </li>
            <li>
              <h3 className='header-sm'>See the winners</h3>
              <FaTrophy
                className={`bg-${theme}`}
                color='rgb(255,215,0)'
                size={140}
              />
            </li>
          </ol>
        </div>
      )}
    </ThemeConsumer>
  );
}

class Battle extends React.Component {
  state = {
    playerOne: null,
    playerTwo: null
  };
  handleSubmit = (player, id) => {
    this.setState(() => ({
      [player]: id
    }));
  };
  handleReset = (id) => {
    this.setState(() => ({
      [id]: null
    }));
  };

  render() {
    const { playerOne, playerTwo, battle } = this.state;
    const route = {
      pathname: `/battle/results`,
      search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
    };

    return (
      <React.Fragment>
        <Instructions />
        <div className='players-container'>
          <h1 className='center-text header-lg'>Players</h1>
          <div className='row space-around'>
            {playerOne === null ? (
              <PlayerInput
                label='Player One'
                onSubmit={(player) => this.handleSubmit("playerOne", player)}
              />
            ) : (
                <PlayerPreview
                  username={this.state.playerOne}
                  label='Player One'
                  onReset={() => this.handleReset("playerOne")}
                />
              )}
            {playerTwo === null ? (
              <PlayerInput
                label='Player Two'
                onSubmit={(player) => this.handleSubmit("playerTwo", player)}
              />
            ) : (
                <PlayerPreview
                  username={this.state.playerTwo}
                  label='Player Two'
                  onReset={() => this.handleReset("playerTwo")}
                />
              )}
          </div>
          <hr />
          {playerOne && playerTwo && (
            <Link
              to={route}
              className='btn dark-btn btn-space'
              onClick={() => this.setState({ battle: true })}
            >
              Battle
            </Link>
          )}
        </div>
      </React.Fragment>
    );
  }
}
export default Battle;