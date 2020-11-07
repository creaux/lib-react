import {
  ShippingAbstract,
  ShippingAbstractProps,
  ShippingAbstractState,
} from './shipping.abstract.container';
import { shippingState } from './shipping.factory';

export interface ShippingProps extends ShippingAbstractProps {}

export class Shipping extends ShippingAbstract<ShippingProps> {
  public readonly state: ShippingAbstractState;

  constructor(props: ShippingAbstractProps) {
    super(props);
    this.state = shippingState;
  }
}
