import React from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from './component';
import { Form, FormType } from '../../../Form/component';

const story = storiesOf('Atomic Design/Atoms/forms/Select', module);

story.add('normal', () => (
  <Form type={FormType.NORMAL} onSubmit={() => {}}>
    <Select
      id="select"
      label="Select"
      onChange={() => {}}
      value=""
      onValidChange={() => {}}
      messages={[
        'Text is correct',
        'Please fill valid number.',
        'Please fill some number',
      ]}
      options={[
        {
          id: 'deset',
          title: 'Deset',
          value: 'Deset',
        },
      ]}
      placeholder="Etwas"
      disabled={false}
    />
  </Form>
));

story.add('onplace', () => (
  <Form type={FormType.ONPLACE} onSubmit={() => {}}>
    <Select
      id="select"
      label="Select"
      onChange={() => {}}
      value=""
      onValidChange={() => {}}
      messages={[
        'Text is correct',
        'Please fill valid number.',
        'Please fill some number',
      ]}
      options={[
        {
          id: 'deset',
          title: 'Deset',
          value: 'Deset',
        },
      ]}
      placeholder="Etwas"
      disabled={false}
    />
  </Form>
));

story.add('inline', () => (
  <Form type={FormType.INLINE} onSubmit={() => {}}>
    <Select
      id="select"
      label="Select"
      onChange={() => {}}
      value=""
      onValidChange={() => {}}
      messages={[
        'Text is correct',
        'Please fill valid number.',
        'Please fill some number',
      ]}
      options={[
        {
          id: 'deset',
          title: 'Deset',
          value: 'Deset',
        },
      ]}
      placeholder="Etwas"
      disabled={false}
    />
  </Form>
));
