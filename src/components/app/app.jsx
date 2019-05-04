import React from 'react';
import ScreenWelcome from '../screen-welcome/screen-welcome.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {gameTime, errorCount} = props;

  return <ScreenWelcome
    time={gameTime}
    errorCount={errorCount}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number
};

export default App;
