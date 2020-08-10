import { CarouselSlide, CarouselVariants } from './carousel.types';
import { CarouselProps } from './carousel.component';

export class CarouselPropsBuilder {
  private slides!: CarouselSlide[];
  private variant!: CarouselVariants;

  withSlides(slides: CarouselSlide[]): CarouselPropsBuilder {
    this.slides = slides;
    return this;
  }

  withVariant(variant: CarouselVariants): CarouselPropsBuilder {
    this.variant = variant;
    return this;
  }

  build(): CarouselProps {
    return {
      slides: this.slides,
      variant: this.variant,
    };
  }
}
