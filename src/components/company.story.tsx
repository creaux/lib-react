import React, { FormEvent } from 'react';
import { storiesOf } from '@storybook/react';
import { Company, CompanyProps } from './company';
import { Form, FormType } from '../forms/Form/component';
import { Builder } from '../builder';
import { IInput } from '../forms/Field/types';

const props: CompanyProps = Builder<CompanyProps>()
  .company(Builder<IInput>().id('company').value('').valid(false).build())
  .disabled(false)
  .vat(Builder<IInput>().id('vat').value('').valid(false).build())
  .onFieldChange(
    () => (event: FormEvent<HTMLInputElement | HTMLSelectElement>) => {}
  )
  .onValidFieldChange(() => (valid: boolean) => {})
  .build();

const story = storiesOf('Atomic Design/Moleculs/forms/Company', module);

story.add('normal', () => (
  <Form type={FormType.NORMAL} onSubmit={() => {}}>
    <Company {...props} />
  </Form>
));

story.add('onplace', () => (
  <Form type={FormType.ONPLACE} onSubmit={() => {}}>
    <Company {...props} />
  </Form>
));

story.add('inline', () => (
  <Form type={FormType.INLINE} onSubmit={() => {}}>
    <Company {...props} />
  </Form>
));

story.add('floating', () => (
  <Form type={FormType.FLOATING} onSubmit={() => {}}>
    <Company {...props} />
  </Form>
));
