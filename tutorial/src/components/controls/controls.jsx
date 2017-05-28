import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGameAction } from 'actions/actions';
import { endGameAction } from 'actions/actions';
import PropTypes from 'prop-types';


import './controls.scss';

class Controls extends Component {
  constructor (props) {
    super(props);

    this.state = {
      gameStartClass: '',
      gameInProgressClass: '',
      gameOverClass: 'hidden',
      gameTimer: null
    };

    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  startGame () {
    this.props.dispatch(startGameAction());
    this.setState({
      gameStartClass: '',
      gameInProgressClass: 'invisible',
      gameOverClass: 'hidden',
      gameTimer: setTimeout(
        () => {
          this.endGame();
        },
        20000
      )
    });
  }

  endGame () {
    this.props.dispatch(endGameAction());

    this.setState({
      gameStartClass: 'hidden',
      gameInProgressClass: '',
      gameOverClass: '',
      gameTimer: null

    });
  }

  render () {
    return (
      <div className="controls-container">
        <div className={this.state.gameStartClass}>
          <h2>Click a frog</h2>
        </div>

        <div className={this.state.gameOverClass}>
          <h2>GAME OVER</h2>
        </div>

        <div className={this.state.gameInProgressClass}>
          <button className="btn btn-primary" onClick={this.startGame}>Start</button>
        </div>
      </div>
    );
  }
}

Controls.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(Controls);
