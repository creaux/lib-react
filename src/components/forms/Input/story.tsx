import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputContainer as Input, InputContainerProps } from './container';
import { InputTypeEnum } from './types';
import { Form } from '../Form';
import { FormType } from '../Form/component';
import { Validators } from '../../../validators';
import { ValidatorModel } from '../../../validators/validator';

const props: InputContainerProps = {
  id: '123456',
  value: '511 01',
  datalist: ['130 00', '888 88'],
  type: InputTypeEnum.TEXT,
  onChange() {},
  validator: new ValidatorModel([Validators.text('')], ''),
  onValidChange: () => {}
};

storiesOf('Atoms/forms/Input', module)
  .add('default', () => <Input {...props} />)
  .add('with validator', () => {
    const props = {
      id: 'email',
      value: '',
      type: InputTypeEnum.EMAIL,
      onChange() {}
    };

    const validator = new ValidatorModel(
      [
        {
          validator: (value: string | number) => {
            return !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
              value.toString()
            );
          },
          message: 'Please fill valid email address.'
        }
      ],
      ''
    );
    return <Input {...props} validator={validator} onValidChange={() => {}} />;
  })
  .add('with Form Context', () => {
    return (
      <Form type={FormType.ONPLACE} onSubmit={() => {}}>
        <Input {...props} />
      </Form>
    );
  });
