import React from 'react';
import Welcome from '../screens/welcome.jsx';

const App = (props) => {
  const {gameTime, errorCount} = props;

  return <Welcome
    time={gameTime}
    errorCount={errorCount}
  />;
};

export default App;
