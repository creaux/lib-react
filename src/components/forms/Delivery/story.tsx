import React from 'react';
import { storiesOf } from '@storybook/react';
import { Delivery } from './component';
import { IAbode } from '../Abode/types';
import { OnGroupChange, OnValidGroupFieldChange } from '../../types/form';
import { IShippingGroups } from '../Shipping/types';
import { Form, FormType } from '../Form/component';

type Group = 'invoicing' | 'delivery';
type Field = 'distribution' | 'terms' | 'data';

interface Props {
  delivery: IAbode;
  onGroupChange: OnGroupChange<keyof IShippingGroups, keyof IAbode>;
  onValidFieldChange: OnValidGroupFieldChange<keyof IShippingGroups, keyof IAbode>;
}

const props: Props = {
  onValidFieldChange: (field) => (field: keyof IAbode) => (valid: boolean) => {},
  onGroupChange: (group: Group) => (field: keyof IAbode) => (id) => {},
  delivery: {
    forname: {
      id: '',
      value: '',
      messages: {
        valid: '',
        invalid: ''
      }
    },
    surname: {
      id: '',
      value: '',
      messages: {
        valid: '',
        invalid: ''
      }
    },
    street: {
      id: '',
      value: '',
      messages: {
        valid: '',
        invalid: ''
      }
    },
    streetNo: {
      id: '',
      value: '',
      messages: {
        valid: '',
        invalid: ''
      }
    },
    postcode: {
      id: '',
      value: '',
      messages: {
        valid: '',
        invalid: ''
      }
    },
    cities: {
      id: '',
      value: '',
      options: [
        {
          id: '',
          title: '',
          value: ''
        }
      ]
    },
    countries: {
      id: '',
      value: '',
      options: [
        {
          id: '',
          title: '',
          value: ''
        }
      ]
    },
  }
};

const story = storiesOf('Moleculs/forms/Delivery', module);

story.add('normal', () => (
  <Form type={FormType.NORMAL} onSubmit={() => {}}>
    <Delivery {...props} />
  </Form>
));

story.add('onplace', () => (
  <Form type={FormType.ONPLACE} onSubmit={() => {}}>
    <Delivery {...props} />
  </Form>
));

story.add('inline', () => (
  <Form type={FormType.INLINE} onSubmit={() => {}}>
    <Delivery {...props} />
  </Form>
));
