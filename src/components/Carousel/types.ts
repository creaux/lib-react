export interface CarouselSlide {
  alt: string;
  src: string;
}

export enum Variants {
  SIMPLE = 'simple',
  MULTI = 'multi'
}

export type Slide = CarouselSlide | CarouselSlide[];
export type Slides = Slide[];
