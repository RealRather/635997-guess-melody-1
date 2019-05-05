import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from "./welcome-screen.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Simulate click events in Screen-Welcome`, () => {
  const clickHandler = jest.fn();
  const welcome = shallow(<WelcomeScreen
    time={0}
    errorCount={0}
    clickHandler={clickHandler}
  />);

  const startButton = welcome.find(`button`);
  startButton.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
