export class Environment {
  public readonly REST_ENDPOINT_CREATE_PAYMENT!: string;
  public readonly STRIPE_PUBLISHABLE_KEY!: string;

  constructor() {
    if (process.env.STRIPE_PUBLISHABLE_KEY) {
      this.STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY;
    }

    if (process.env.STORYBOOK_STRIPE_PUBLISHABLE_KEY) {
      this.STRIPE_PUBLISHABLE_KEY =
        process.env.STORYBOOK_STRIPE_PUBLISHABLE_KEY;
    }

    if (process.env.REST_ENDPOINT_CREATE_PAYMENT) {
      this.REST_ENDPOINT_CREATE_PAYMENT =
        process.env.REST_ENDPOINT_CREATE_PAYMENT;
    }

    if (process.env.STORYBOOK_REST_ENDPOINT_CREATE_PAYMENT) {
      this.REST_ENDPOINT_CREATE_PAYMENT =
        process.env.STORYBOOK_REST_ENDPOINT_CREATE_PAYMENT;
    }

    if (!this.REST_ENDPOINT_CREATE_PAYMENT) {
      console.error('Env variable REST_ENDPOINT_CREATE_PAYMENT not set!');
    }

    if (!this.STRIPE_PUBLISHABLE_KEY) {
      console.error('Env variable STRIPE_PUBLISHABLE_KEY not set!');
    }
  }
}
