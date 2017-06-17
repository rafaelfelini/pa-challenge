import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';

it('should renders without crashing', () => {
  shallow(<Button label="Foo bar" />);
});

it('should return a `button` with onClick event', () => {
  const onClick = jest.fn();
  const div = document.createElement('div');
  const button = shallow(<Button label="Foo bar" onClick={onClick}/>, div);

  button.simulate('click');

  expect(onClick).toBeCalled();
});

it('should return a `Link` with `to` property', () => {
  const div = document.createElement('div');
  const button = shallow(<Button label="Foo bar" url='foo/bar'/>, div);

  expect(button.prop('to')).toEqual('foo/bar');
});
