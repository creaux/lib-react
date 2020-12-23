export class Environment {
  public readonly REST_ENDPOINT_CREATE_PAYMENT!: string;
  public readonly STRIPE_PUBLISHABLE_KEY!: string;
  public readonly API_CHECKOUT!: string;

  constructor() {
    if (process.env.STRIPE_PUBLISHABLE_KEY) {
      this.STRIPE_PUBLISHABLE_KEY = process.env
        .STRIPE_PUBLISHABLE_KEY as string;
    }

    if (process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY) {
      this.STRIPE_PUBLISHABLE_KEY = process.env
        .REACT_APP_STRIPE_PUBLISHABLE_KEY as string;
    }

    if (process.env.STORYBOOK_STRIPE_PUBLISHABLE_KEY) {
      this.STRIPE_PUBLISHABLE_KEY = process.env
        .STORYBOOK_STRIPE_PUBLISHABLE_KEY as string;
    }

    if (process.env.REST_ENDPOINT_CREATE_PAYMENT) {
      this.REST_ENDPOINT_CREATE_PAYMENT = process.env
        .REST_ENDPOINT_CREATE_PAYMENT as string;
    }

    if (process.env.REACT_APP_REST_ENDPOINT_CREATE_PAYMENT) {
      this.REST_ENDPOINT_CREATE_PAYMENT = process.env
        .REACT_APP_REST_ENDPOINT_CREATE_PAYMENT as string;
    }

    if (process.env.STORYBOOK_REST_ENDPOINT_CREATE_PAYMENT) {
      this.REST_ENDPOINT_CREATE_PAYMENT = process.env
        .STORYBOOK_REST_ENDPOINT_CREATE_PAYMENT as string;
    }

    if (process.env.API_CHECKOUT) {
      this.API_CHECKOUT = process.env.API_CHECKOUT as string;
    }

    if (process.env.REACT_APP_API_CHECKOUT) {
      this.API_CHECKOUT = process.env.REACT_APP_API_CHECKOUT as string;
    }

    if (process.env.STORYBOOK_API_CHECKOUT) {
      this.API_CHECKOUT = process.env.STORYBOOK_API_CHECKOUT as string;
    }

    if (!this.REST_ENDPOINT_CREATE_PAYMENT) {
      console.error('Env variable REST_ENDPOINT_CREATE_PAYMENT not set!');
    }

    if (!this.STRIPE_PUBLISHABLE_KEY) {
      console.error('Env variable STRIPE_PUBLISHABLE_KEY not set!');
    }

    if (!this.API_CHECKOUT) {
      console.error('Env variable API_CHECKOUT not set!');
    }
  }
}

export const environment = new Environment();
