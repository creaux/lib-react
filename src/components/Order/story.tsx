import React from 'react';
import { storiesOf } from '@storybook/react';
import { Order } from './component';
import { List } from '../List';
import { props as listProps } from '../List/story';
import { props as stepsProps } from '../Steps/story';
import { Steps } from '../Steps';
import { action } from '@storybook/addon-actions';

const listEmptyProps = Object.assign({}, listProps);
listEmptyProps.items = [];

storiesOf('Organisms/Order', module)
  .add('default', () => (
    <Order bare="There is no product in the checkout.">
      <List {...listProps} onRemove={action('Clicked on remove!')} />
      <Steps {...stepsProps} />
    </Order>
  ))
  .add('empty', () => (
    <Order bare="There is no product in the checkout.">
      <List {...listEmptyProps} />
      <Steps {...stepsProps} />
    </Order>
  ));
