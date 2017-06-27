import React from 'react';
import { shallow } from 'enzyme';
import Heading from '../../components/Heading';

it('should renders without crashing', () => {
  shallow(<Heading>Foo bar</Heading>);
});
