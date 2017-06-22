import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../components/Loading';

it('should renders without crashing', () => {
  shallow(<Loading />);
});
