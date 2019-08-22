import React, { FunctionComponent, FormEvent } from 'react';
import { RadioStack } from '../RadioStack/component';
import { Abode, IAbode } from '../Abode';
// @ts-ignore
import { Accordion, Card } from 'react-bootstrap';
import { Checkbox } from '../../forms/Checkbox';
import { Button, Variants } from '../Button';
import {
  OnFieldChange,
  OnGroupChange,
  OnValidGroupFieldChange
} from '../../types/form';
import { IShippingFields, IShippingGroups } from './types';

interface ShippingProps extends IShippingGroups, IShippingFields {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onFieldChange: OnFieldChange<keyof IShippingFields>;
  onGroupChange: OnGroupChange<keyof IShippingGroups, keyof IAbode>;
  onValidGroupFieldChange: OnValidGroupFieldChange<
    keyof IShippingGroups,
    keyof IAbode
  >;
  valid: boolean;
}

export const Shipping: FunctionComponent<ShippingProps> = ({
  distribution,
  invoicing,
  delivery,
  terms,
  data,
  onSubmit: handleSubmit,
  onGroupChange: handleGroupChange,
  onFieldChange: handleFieldChange,
  onValidGroupFieldChange: handleValidGroupFieldChange,
  valid
}) => (
  <>
    <RadioStack
      {...distribution}
      onChange={handleFieldChange('distribution')}
    />
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant={Variants.LINK} eventKey="0">
            Invoicing Address
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Abode
              {...invoicing}
              onFieldChange={handleGroupChange('invoicing')}
              onValidFieldChange={handleValidGroupFieldChange('invoicing')}
            />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant={Variants.LINK} eventKey="1">
            Delivery Address
          </Accordion.Toggle>
          <small>
            Fill only if delivery address is different than invoicing address.
          </small>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Abode
              {...delivery}
              onFieldChange={handleGroupChange('delivery')}
              onValidFieldChange={handleValidGroupFieldChange('delivery')}
            />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    <Checkbox {...terms} onChange={handleFieldChange('terms')} />
    <Checkbox {...data} onChange={handleFieldChange('data')} />
    <Button onClick={handleSubmit} disabled={!valid}>
      Next
    </Button>
  </>
);
