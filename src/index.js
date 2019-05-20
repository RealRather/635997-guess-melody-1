import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import questions from './mocks/questions';

const settings = {
  gameTime: 6,
  errorCount: 2,
};

const init = (gameQuestions) => {
  const {errorCount, gameTime} = settings;

  ReactDOM.render(
      <App
        errorCount={errorCount}
        gameTime={gameTime}
        questions={gameQuestions}
      />,
      document.querySelector(`.main`)
  );
};

init(questions);
