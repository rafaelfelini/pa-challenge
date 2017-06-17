import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

it('should renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<Header />, div);
});
