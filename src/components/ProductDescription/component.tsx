import React, { FunctionComponent } from 'react';
import { Button, Variants } from '../forms/Button';

export interface ProductDescriptionProps {
  title: string;
  category: string;
  description: string;
  price: string;
  action: string;
  onAdd: (event: MouseEvent) => void;
}

export const ProductDescription: FunctionComponent<ProductDescriptionProps> = ({
  title,
  category,
  description,
  price,
  action,
  onAdd
}) => (
  <div className="d-flex align-items-center justify-content-center h-100">
    <div className="d-flex flex-column w-100 ml-sm-8 mr-sm-8">
      <h2>{title}</h2>
      <p className="text-uppercase">{category}</p>
      <p className="font-weight-light mb-4 mb-sm-3">{description}</p>
      <div className="d-flex justify-content-between flex-row flex-sm-column justify-content-sm-center">
        <div className="align-self-center align-self-sm-start mb-sm-3">
          <span className="h2">{price}</span>
        </div>
        <Button
          variant={Variants.OUTLINE_DARK}
          onClick={onAdd}
          className="align-self-center align-self-sm-stretch"
        >
          {action}
        </Button>
      </div>
    </div>
  </div>
);
