import React from 'react';
import { shallow } from 'enzyme';
import ProductsList from '../../components/ProductsList';

it('should renders without crashing', () => {
  shallow(<ProductsList products={[]} />);
});
