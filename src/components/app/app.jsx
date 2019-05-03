import React from 'react';
import Welcome from '../screens/welcome.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {gameTime, errorCount} = props;

  return <Welcome
    time={gameTime}
    errorCount={errorCount}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number
};

export default App;
