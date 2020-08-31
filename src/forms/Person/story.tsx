import React from 'react';
import { storiesOf } from '@storybook/react';
import { Person, PersonProps } from './component';
import { Form, FormType } from '../Form';

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
