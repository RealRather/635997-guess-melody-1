import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

it(`Render WelcomeScreen`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      time={0}
      errorCount={0}
      clickHandler={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
