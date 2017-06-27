import React from 'react';
import { shallow } from 'enzyme';
import Select from '../../components/Select';

it('should renders without crashing', () => {
  shallow(<Select name="mySelect"  placeholder="Foo bar" />);
});

it('should render a select with onChange event', () => {
  const onChange = jest.fn();
  const div = document.createElement('div');
  const field = shallow(<Select name="mySelect" placeholder="Foo bar" onChange={onChange}/>, div);

  field.find('select').simulate('change', { target: { value: 'Foo value' }, persist: () => null });

  expect(onChange).toBeCalled();
});
