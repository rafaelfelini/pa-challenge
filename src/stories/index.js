import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Header from '../components/Header';
import '../index.css';

storiesOf('Header', module)
  .add('Default', () => (
    <Header />
  ));
