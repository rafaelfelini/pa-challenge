import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

it('should renders without crashing', () => {
  shallow(<App />);
});
