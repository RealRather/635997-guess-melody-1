import React from 'react';
import renderer from 'react-test-renderer';
import ScreenWelcome from './screen-welcome.jsx';

it(`Render ScreenWelcome`, () => {
  const tree = renderer
    .create(<ScreenWelcome
      time={0}
      errorCount={0}
      onClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
