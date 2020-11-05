import { createElement, PureComponent } from 'react';
import { OneCheckout } from './one-checkout.component';
import { ProductDescriptionProps } from './product-description.component';
import { ShippingState } from '../forms/Shipping/container';

export interface OneCheckoutContainerProps {
  product: ProductDescriptionProps;
  goBack: string;
  onGoBack: () => void;
}

export interface OneCheckoutState {
  step: number;
  isShippingValid: boolean;
}

export class OneCheckoutContainer extends PureComponent<
  OneCheckoutContainerProps,
  OneCheckoutState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      step: 0,
      isShippingValid: false,
    };
  }

  private readonly handleGoBack = () => {
    this.props.onGoBack();
  }

  private readonly handleStep = (step: number) => {
    this.setState({ step });
  };

  private readonly handleShippingValidChange = (valid: boolean) => {
    this.setState({ isShippingValid: valid });
  };

  private readonly handleShippingChange = (data: ShippingState) => {};

  render() {
    return createElement(OneCheckout, {
      step: this.state.step,
      goBack: this.props.goBack,
      onGoBack: this.handleGoBack,
      onStep: this.handleStep,
      product: this.props.product,
      onShippingValidChange: this.handleShippingValidChange,
      onShippingChange: this.handleShippingChange,
      isShippingValid: this.state.isShippingValid,
    });
  }
}
