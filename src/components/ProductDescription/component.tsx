import React, { FunctionComponent } from "react";
import { Button } from "../forms/Button";
import { Guard } from "../Guard";
import { Description } from "../Description";
import { Label } from "../Label/component";
import { Image } from "../Image";
import { ImageProps } from "../Image/component";
import cx from "classnames";
import { BuilderInterface } from "@pyxismedia/lib-model";

export class ProductDescriptionPropsBuilder implements BuilderInterface {
  protected title!: string;
  protected price!: string;
  protected className!: string;

  withTitle(title: string) {
    this.title = title;
    return this;
  }

  withPrice(price: string) {
    this.price = price;
    return this;
  }

  withClassName(className: string) {
    this.className = className;
    return this;
  }

  build(): ProductDescriptionProps {
    return {
      title: this.title,
      price: this.price,
      className: this.className
    };
  }
}

export interface ProductDescriptionProps {
  title: string;
  price: string;
  className?: string;
}

export const ProductDescription: FunctionComponent<ProductDescriptionProps> = ({
  title,
  price,
  className,
  children
}) => (
  <div
    className={cx(
      "d-flex align-items-center justify-content-center h-100",
      className
    )}
  >
    <div className="d-flex flex-column w-100">
      <h3>{title}</h3>
      <Guard Component={Label}>{children}</Guard>
      <Guard Component={Description}>{children}</Guard>
      <div className="d-flex justify-content-between flex-row flex-sm-column justify-content-sm-center">
        <div className="align-self-center align-self-sm-start mb-sm-3">
          <span className="h1">{price}</span>
        </div>
        <Guard<ImageProps>
          Component={Image}
          props={{ className: "product-description-image" }}
        >
          {children}
        </Guard>
        <Guard Component={Button}>{children}</Guard>
      </div>
    </div>
  </div>
);
