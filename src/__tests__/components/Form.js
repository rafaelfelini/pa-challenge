import React from 'react';
import { shallow } from 'enzyme';
import { Form } from '../../components/Form';

it('should render a form with onSubmit event', () => {
  const onSubmit = jest.fn();
  const div = document.createElement('div');
  const field = shallow(<Form onSubmit={onSubmit}/>, div);

  field.find('form').simulate('submit', { preventDefault: () => null });

  expect(onSubmit).toBeCalled();
});
