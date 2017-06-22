import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../components/Button';
import HeaderControls from '../components/HeaderControls';
import Field from '../components/Field';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
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

storiesOf('HeaderControls', module)
  .add('One controls', () => (
    <HeaderControls>
      <Button
        appearance="secondary"
        title="Voltar para listagem"
        label="Ver produtos"
        onClick={action('Header Controls clicked')}
      />
    </HeaderControls>
  ))
  .add('Two controls', () => (
    <HeaderControls>
      <div>
        <Button
          appearance="secondary"
          title="Voltar para listagem"
          label="Ver produtos"
          onClick={action('Header Controls clicked')}
        />
        <Button
          appearance="primary"
          title="Foo bar"
          label="Foo bar"
          onClick={action('Header Controls clicked')}
        />
      </div>

      <div>
        <Field name="myField" onInput={action('Field changed')} placeholder="Search"/>
      </div>
    </HeaderControls>
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
  ))
  .add('With currency mask', () => (
    <Field mask="currency" name="myField" onInput={action('Field changed')} label="My Currency Field" placeholder="R$ 100,00"/>
  ));

storiesOf('Product Item', module)
  .add('Default', () => (
    <BrowserRouter>
      <ProductItem title="Foo Bar Item" id="12jbibi12j" description="Foo bar description" price="9990"/>
    </BrowserRouter>
  ));
