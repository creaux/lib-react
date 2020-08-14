import React from 'react';
import { storiesOf } from '@storybook/react';
import { Raiser } from './container';
import { action } from '@storybook/addon-actions';

const story = storiesOf('Atomic Design/Moleculs/Raiser', module);

story.add('default', () => <Raiser onCount={action('Count changed!')} />);
