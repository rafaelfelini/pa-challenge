import React from 'react';
import { shallow } from 'enzyme';
import ProductItem from '../../components/ProductItem';

it('should renders without crashing', () => {
  shallow(<ProductItem title="Product Foo bar" price="1000" id="b1iu23b123uyb" />);
});
