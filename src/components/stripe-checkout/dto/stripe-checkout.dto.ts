import { StripeCheckoutDeliveryDto } from './stripe-checkout-delivery.dto';
import { StripeCheckoutConditionsDto } from './stripe-checkout-conditions.dto';

export interface StripeCheckoutDto {
  delivery: StripeCheckoutDeliveryDto;
  conditions: StripeCheckoutConditionsDto;
  forename: string;
  surname: string;
  phone: string;
  email: string;
  carrier?: string;
}
