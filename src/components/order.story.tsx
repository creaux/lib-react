import React from 'react';
import { storiesOf } from '@storybook/react';
import { Order } from './order.component';
import { List } from './list.component';
import { props as listProps } from './list.story';
import { props as stepsProps } from './steps.story';
import { Steps } from './steps.component';
import { action } from '@storybook/addon-actions';

const listEmptyProps = Object.assign({}, listProps);
listEmptyProps.items = [];

storiesOf('Atomic Design/Organisms/Order', module)
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
