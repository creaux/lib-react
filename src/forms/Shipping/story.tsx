import React, { useState, FunctionComponent } from 'react';
import { storiesOf } from '@storybook/react';
import { Shipping } from './container';
import { Form, FormType } from '../Form/component';
import { Button, Type } from '../Button';

const story = storiesOf('Atomic Design/Organisms/forms/Shipping', module);

interface ParentProps {
  formType: FormType;
}

const Parent: FunctionComponent<ParentProps> = ({ formType }) => {
  const [disabled, setDisabled] = useState(true);
  const handleFormChange = () => {
    return;
  };
  const handleFormValidChange = (valid: boolean) => {
    return setDisabled(!valid);
  };
  return (
    <Form type={formType} onSubmit={() => {}}>
      <Shipping
        onFormValidChange={handleFormValidChange}
        onFormChange={handleFormChange}
      />
      <Button type={Type.SUBMIT} disabled={disabled}>
        Submit
      </Button>
    </Form>
  );
};

story.add('normal', () => {
  return <Parent formType={FormType.NORMAL} />;
});

story.add('onplace', () => {
  return <Parent formType={FormType.ONPLACE} />;
});

story.add('inline', () => {
  return <Parent formType={FormType.INLINE} />;
});
