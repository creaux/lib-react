import { ImageVariants } from './image.types';
import { ReactNode } from 'react';
import { ImageProps } from './image.component';
import { BreakpointCoordinates } from '../../../breakpoint-coordinates.type';

export class ImagePropsBuilder {
  private src!: string;
  private alt!: string;
  private variant!: ImageVariants;
  private className!: string;
  private children!: ReactNode;
  private rounded!: boolean;
  private backgroundPositions!: BreakpointCoordinates;

  public withSrc(src: string): ImagePropsBuilder {
    this.src = src;
    return this;
  }

  public withAlt(alt: string): ImagePropsBuilder {
    this.alt = alt;
    return this;
  }

  public withVariant(variant: ImageVariants): ImagePropsBuilder {
    this.variant = variant;
    return this;
  }

  public withClassName(className: string): ImagePropsBuilder {
    this.className = className;
    return this;
  }

  public withChildren(children: ReactNode): ImagePropsBuilder {
    this.children = children;
    return this;
  }

  public withRounded(rounded: boolean): ImagePropsBuilder {
    this.rounded = rounded;
    return this;
  }

  public withBackgroundPositions(
    backgroundPositions: BreakpointCoordinates
  ): ImagePropsBuilder {
    this.backgroundPositions = backgroundPositions;
    return this;
  }

  public build(): ImageProps {
    return {
      src: this.src,
      alt: this.alt,
      variant: this.variant,
      className: this.className,
      children: this.children,
      rounded: this.rounded,
      backgroundPositions: this.backgroundPositions,
    };
  }
}
