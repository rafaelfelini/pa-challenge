import React from 'react';
import { shallow } from 'enzyme';
import Field from '../../components/Field';

it('should renders without crashing', () => {
  shallow(<Field name="myField"  placeholder="Foo bar" />);
});

it('should render a input with onInput event', () => {
  const onInput = jest.fn();
  const div = document.createElement('div');
  const field = shallow(<Field name="myField" placeholder="Foo bar" onInput={onInput}/>, div);

  field.find('input').simulate('input', { which: 'Foo value' });

  expect(onInput).toBeCalled();
});
