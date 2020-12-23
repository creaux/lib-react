import React, { FormEvent, FunctionComponent, ReactNode } from 'react';
import { Builder } from '../../../../builder';
import { Card, CardProps } from '../../../composable/card/card.component';
import { Form, FormType } from '../../../../forms/Form/component';
import { Image, ImageProps } from '../../../bits/visual/image/image.component';
import { ImageVariants } from '../../../bits/visual/image/image.types';
import { Name } from '../../../bits/typographical/name.component';
import { Price } from '../../../bits/typographical/price.component';
import { Brand } from '../../../bits/typographical/brand.component';
import { Button } from '../../../../forms/Button/component';

export interface CollectProduct {
  id: string;
  name: string;
  price: string;
  currency: string;
  images: string[];
  brand: string;
  children: ReactNode;
}

export interface CollectProps {
  handleCollect: (event: FormEvent<HTMLFormElement>) => void;
  product: CollectProduct;
  children?: ReactNode;
}

export const Collect: FunctionComponent<CollectProps> = ({
  handleCollect,
  product,
  children,
}) => {
  const productCardProps = Builder<CardProps>().id(product.id).build();

  const imageProps: ImageProps = Builder<ImageProps>()
    .src(product.images[0])
    .build();

  return (
    <Form type={FormType.FLOATING} onSubmit={handleCollect}>
      <div className="d-flex align-items-md-center">
        <div className="container p-4">
          <div className="row justify-content-between">
            <div className="col-md-5 col-s-12 justify-content-center d-flex flex-column">
              <Card {...productCardProps}>
                <Name>{product.name}</Name>
                <Price currency={product.currency}>{product.price}</Price>
                <Image {...imageProps} variant={ImageVariants.BACKGROUND} />
                <Brand>{product.brand}</Brand>
              </Card>
              <div className="text-muted align-middle justify-content-center align-items-center align-middle d-none d-md-flex">
                <small>
                  Based on&nbsp;
                  <svg
                    className="align-top"
                    focusable="false"
                    width="33"
                    height="15"
                  >
                    <g fill-rule="evenodd">
                      <path d="M32.956 7.925c0-2.313-1.12-4.138-3.261-4.138-2.15 0-3.451 1.825-3.451 4.12 0 2.719 1.535 4.092 3.74 4.092 1.075 0 1.888-.244 2.502-.587V9.605c-.614.307-1.319.497-2.213.497-.876 0-1.653-.307-1.753-1.373h4.418c0-.118.018-.588.018-.804zm-4.463-.859c0-1.02.624-1.445 1.193-1.445.55 0 1.138.424 1.138 1.445h-2.33zM22.756 3.787c-.885 0-1.454.415-1.77.704l-.118-.56H18.88v10.535l2.259-.48.009-2.556c.325.235.804.57 1.6.57 1.616 0 3.089-1.302 3.089-4.166-.01-2.62-1.5-4.047-3.08-4.047zm-.542 6.225c-.533 0-.85-.19-1.066-.425l-.009-3.352c.235-.262.56-.443 1.075-.443.822 0 1.391.922 1.391 2.105 0 1.211-.56 2.115-1.39 2.115zM18.04 2.766V.932l-2.268.479v1.843zM15.772 3.94h2.268v7.905h-2.268zM13.342 4.609l-.144-.669h-1.952v7.906h2.259V6.488c.533-.696 1.436-.57 1.716-.47V3.94c-.289-.108-1.346-.307-1.879.669zM8.825 1.98l-2.205.47-.009 7.236c0 1.337 1.003 2.322 2.34 2.322.741 0 1.283-.135 1.581-.298V9.876c-.289.117-1.716.533-1.716-.804V5.865h1.716V3.94H8.816l.009-1.96zM2.718 6.235c0-.352.289-.488.767-.488.687 0 1.554.208 2.241.578V4.202a5.958 5.958 0 0 0-2.24-.415c-1.835 0-3.054.957-3.054 2.557 0 2.493 3.433 2.096 3.433 3.17 0 .416-.361.552-.867.552-.75 0-1.708-.307-2.467-.723v2.15c.84.362 1.69.515 2.467.515 1.879 0 3.17-.93 3.17-2.548-.008-2.692-3.45-2.213-3.45-3.225z"></path>
                    </g>
                  </svg>
                  &nbsp;Technology
                </small>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </Form>
  );
};
