import React from 'react';
import { shallow } from 'enzyme';
import { Form } from '../../components/Form';

it('should renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<Form />, div);
});
