import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Raiser } from './container';
import { action } from '@storybook/addon-actions';

const story = storiesOf('Moleculs/Raiser', module);
const typings = story.addDecorator(withInfo({ header: false }));

typings.add('default', () => <Raiser onCount={action('Count changed!')} />);
