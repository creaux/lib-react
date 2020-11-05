import React, { FunctionComponent }, { FunctionComponent } from 'react';
import { OneCheckout, OneCheckoutProps } from './one-checkout.component';
import { Builder } from '../builder';
import { I18n, Translations } from './i18n.component';
import defaultTranslations from './one-checkout.en.json';

export interface CheckoutTranslations extends Translations {
  BUTTON_BACK: string;
  BUTTON_NEXT: string;
}

export const Checkout: FunctionComponent = () => {
  const oneCheckoutProps = Builder<OneCheckoutProps>()
    .back()
    .next()
    .build();

  return (
    <I18n.Consumer<CheckoutTranslations>
      defaultTranslations={defaultTranslations}
    >
      {(translations) => (
        <OneCheckout {...oneCheckoutProps} />
      )}
    </I18n.Consumer>
  );
};
