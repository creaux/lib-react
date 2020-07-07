import { createElement, Component, FormEvent } from "react";
import { Stripe as StripeComponent } from "./component";
import { elementsProvider, ElementsContextValue } from "./elementsConsumer";
import { CardNumberElement } from "@stripe/react-stripe-js";

interface StripeProps extends ElementsContextValue {}

export class StripeContainer extends Component<StripeProps> {
  private secret!: string;

  constructor(props: StripeProps) {
    super(props);

    if (process.env.REST_ENDPOINT_CREATE_PAYMENT) {
      fetch(process.env.REST_ENDPOINT_CREATE_PAYMENT, {
        method: "POST",
        body: JSON.stringify({
          productId: "1"
        })
      }).then(response => {
        response.text().then(secret => {
          const parsed = JSON.parse(secret);
          this.secret = parsed;
        });
      });
    } else {
      new Error(`Variable REST_ENDPOINT_CREATE_PAYMENT is not defined.`);
    }
  }

  private readonly handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const { stripe, elements } = this.props;

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make  sure to disable form submission until Stripe.js has loaded.
      return;
    }

    // @ts-ignore
    const result = await stripe.confirmCardPayment(this.secret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
        billing_details: {
          name: "Jenny Rosen"
        },
        metadata: {
          // TODO: customer https://stripe.com/docs/api/payment_intents/create#create_payment_intent-customer
          // TODO: recipient email https://stripe.com/docs/api/payment_intents/create#create_payment_intent-receipt_email will be taken from customer details
          // TODO: description https://stripe.com/docs/api/payment_intents/object#payment_intent_object-description
          // TODO: shipping https://stripe.com/docs/api/payment_intents/object#payment_intent_object-shipping
          // customer_delivery_forename: request.delivery.forename,
          // customer_delivery_surname: request.delivery.surname,
          // customer_delivery_street: request.delivery.street,
          // customer_delivery_streetNo: request.delivery.streetNo,
          // customer_delivery_postcode: request.delivery.postcode,
          // customer_delivery_city: request.delivery.city,
          // customer_delivery_country: request.delivery.country,
          // customer_billing_forename: request.billing.forename,
          // customer_billing_surname: request.billing.surname,
          // customer_billing_company: request.billing.company,
          // customer_billing_vat: request.billing.vat,
          // customer_billing_street: request.billing.street,
          // customer_billing_streetNo: request.billing.streetNo,
          // customer_billing_postcode: request.billing.postcode,
          // customer_billing_city: request.billing.city,
          // customer_billing_country: request.billing.country
        }
      }
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === "succeeded") {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };

  render() {
    return createElement(StripeComponent, {
      onSubmit: this.handleSubmit,
      disabled: false
    });
  }
}

export const Stripe = elementsProvider<StripeProps>(StripeContainer);
