import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../components/Button';
import Field from '../components/Field';
import Header from '../components/Header';
import '../index.css';

storiesOf('Header', module)
  .add('Not  Authenticated', () => (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  ))
  .add('Authenticated', () => (
    <BrowserRouter>
      <Header isAuthenticated />
    </BrowserRouter>
  ));

storiesOf('Button', module)
  .add('Primary', () => (
    <Button onClick={action('Primary Button clicked')} label="Button Component"/>
  ))
  .add('Secondary', () => (
    <Button onClick={action('Secondary Button clicked')} appearance="secondary" label="Button Component"/>
  ));

storiesOf('Field', module)
  .add('Default', () => (
    <Field name="myField" onInput={action('Field changed')} label="My Field" placeholder="Field Component"/>
  ));
