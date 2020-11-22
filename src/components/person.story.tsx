import React from 'react';
import { storiesOf } from '@storybook/react';
import { Form, FormType } from '../forms/Form';
import { PersonProps } from './person.props';
import { Person } from './person';

export const props: PersonProps = {
  forname: {
    value: 'Karel',
    id: 'forname',
  },
  surname: {
    value: 'Vomacka',
    id: 'surname',
  },
  onFieldChange: () => () => {},
  onFieldValidChange: () => () => {},
  disabled: false,
};

const story = storiesOf('Atomic Design/Moleculs/forms/Person', module);

story.add('normal', () => (
  <Form type={FormType.NORMAL} onSubmit={() => {}}>
    <Person {...props} />
  </Form>
));

story.add('onplace', () => (
  <Form type={FormType.ONPLACE} onSubmit={() => {}}>
    <Person {...props} />
  </Form>
));

story.add('inline', () => (
  <Form type={FormType.INLINE} onSubmit={() => {}}>
    <Person {...props} />
  </Form>
));
