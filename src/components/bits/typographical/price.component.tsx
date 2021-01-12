import React, { FunctionComponent } from 'react';
import { Builder } from '../../../builder';
import { useAcceptLanguage } from '../../../hooks/accept-language.hook';

export interface PriceProps {
  currency: string;
  children: string;
}

export const Price: FunctionComponent<PriceProps> = ({
  children,
  currency,
}) => {
  const locale = useAcceptLanguage();
  const amount = Intl.NumberFormat(
    locale,
    Builder<Intl.NumberFormatOptions>()
      .style('currency')
      .currency(currency)
      .build()
  );
  return (
    <span className="h1 font-weight-bold">
      {amount.format(parseInt(children, 10))}
    </span>
  );
};
