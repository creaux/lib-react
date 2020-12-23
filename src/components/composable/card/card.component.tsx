import React, { FunctionComponent, ReactNode } from 'react';
import { Button, Variants } from '../../../forms/Button/index';
import { Guard } from '../../utility/guard.component';
import { Description } from '../../bits/typographical/description.component';
import { Label } from '../../bits/typographical/label.component';
import { Image } from '../../bits/visual/image/image.component';
import { ImageProps } from '../../bits/visual/image/image.component';
import { Price } from '../../bits/typographical/price.component';
import { Name } from '../../bits/typographical/name.component';
import { Brand } from '../../bits/typographical/brand.component';
import { MediaQuery } from '../../utility/media-query.component';

export interface CardProps {
  id: string;
  children?: ReactNode;
}

export const Card: FunctionComponent<CardProps> = ({ children }) => (
  <div className="d-flex flex-column align-items-center justify-content-center align-items-md-start justify-content-md-start">
    <MediaQuery xs md>
      <Guard<ImageProps>
        Component={Image}
        props={{ className: 'product-card-image mb-4 w-25' }}
      >
        {children}
      </Guard>
    </MediaQuery>

    <Guard Component={Name} props={{ className: '' }}>
      {children}
    </Guard>
    <Guard Component={Label}>{children}</Guard>
    <Guard Component={Description}>{children}</Guard>
    <Guard Component={Price}>{children}</Guard>
    <Guard Component={Brand}>{children}</Guard>

    <MediaQuery md>
      <Guard<ImageProps>
        Component={Image}
        props={{
          className: 'product-card-image mb-4',
        }}
      >
        {children}
      </Guard>
    </MediaQuery>

    <Guard
      Component={Button}
      props={{
        variant: Variants.DARK,
        className: 'align-self-md-center align-self-xs-stretch',
      }}
    >
      {children}
    </Guard>
  </div>
);
