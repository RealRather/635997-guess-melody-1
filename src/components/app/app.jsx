import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {gameTime, errorCount, clickHandler} = props;

  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
    clickHandler={clickHandler}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number,
  clickHandler: PropTypes.func
};

export default App;
