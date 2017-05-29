import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './score.scss';

class Score extends Component {
  render () {
    return (
      <div className="score-container">
        Score: {this.props.scoreCount}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { game } = state;
  const { scoreCount } = game;

  return { scoreCount };
};

Score.propTypes = {
  scoreCount: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(Score);
