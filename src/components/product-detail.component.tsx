import React, { FunctionComponent, ReactNode } from 'react';
import { ProductDescription } from './product-description.component';
import { ImageVariants } from './image.types';
import { Image } from './image.component';
import { ProductDescriptionProps } from './product-description.component';
import { Navigation } from './navigation.component';
import { Guard } from './guard.component';

export interface ProductDetailsProps extends ProductDescriptionProps {
  image: string;
  children: ReactNode;
}

function viewport() {
  // This has to be loaded some globaly
  document.documentElement.style.setProperty(
    '--viewport-height',
    `${window.innerHeight}px`
  );
}

viewport();

window.addEventListener('resize', viewport);

export const ProductDetail: FunctionComponent<ProductDetailsProps> = ({
  title,
  price,
  image,
  children,
}) => {
  const productDescriptionProps = {
    title,
    price,
  };

  const navigationProps = {
    className: 'position-absolute',
    style: { left: 0, right: 0 },
  };

  return (
    <div className="product-detail">
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-end align-items-sm-center">
          <div className="image-column col-lg-7 col-sm-12">
            <div className="w-100 position-relative">
              <Guard Component={Navigation} props={navigationProps}>
                {children}
              </Guard>
            </div>
            <div className="image-wrapper">
              <Image src={image} variant={ImageVariants.BACKGROUND} />
            </div>
          </div>
          <div className="description-column col-lg-5 col-sm-12">
            <ProductDescription {...productDescriptionProps} />
          </div>
        </div>
      </div>
    </div>
  );
};
