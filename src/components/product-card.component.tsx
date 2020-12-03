import React, { FunctionComponent } from 'react';
import { Button } from '../forms/Button';
import { Guard } from './guard.component';
import { Description } from './description.component';
import { Label } from './label.component';
import { Image } from './image.component';
import { ImageProps } from './image.component';
import cx from 'classnames';
import { Product } from './product';

export interface ProductCardProps extends Product {
  className?: string;
}

export const ProductCard: FunctionComponent<ProductCardProps> = ({
  name,
  price,
  className,
  children,
}) => (
  <div
    className={cx(
      'd-flex align-items-center justify-content-center h-100',
      className
    )}
  >
    <div className="d-flex flex-column w-100">
      <h3>{name}</h3>
      <Guard Component={Label}>{children}</Guard>
      <Guard Component={Description}>{children}</Guard>
      <div className="d-flex justify-content-between flex-column justify-content-sm-center">
        <div className="align-self-center align-self-sm-start mb-sm-3">
          <span className="h1">{price}</span>
        </div>
        <Guard<ImageProps>
          Component={Image}
          props={{ className: 'product-card-image' }}
        >
          {children}
        </Guard>
        <Guard Component={Button}>{children}</Guard>
      </div>
    </div>
  </div>
);
