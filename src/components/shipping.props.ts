import { ShippingState } from './shipping.state';

export interface ShippingProps {
  onFormChange: (data: ShippingState) => void;
  onFormValidChange: (valid: boolean) => void;
  disabled: boolean;
}
