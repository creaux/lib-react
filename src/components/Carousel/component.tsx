import * as React from 'react';
import { CarouselSlide, Variants, Slide, Slides } from './types';
import { Carousel as BsCarousel } from 'react-bootstrap';
import defaultProps from 'recompose/defaultProps';
import setDisplayName from 'recompose/setDisplayName';
import compose from 'recompose/compose';
import cn from 'classnames';

const ITEM_WIDTH = 100;

interface ItemProps {
  slide: CarouselSlide;
  width?: number;
}

const ItemPure = ({ slide, width }: ItemProps) => (
  <img
    className={cn(
      { 'd-block': width === ITEM_WIDTH },
      `w-${width || ITEM_WIDTH}`
    )}
    src={slide.src}
    alt={slide.alt}
  />
);

const Item = compose<ItemProps, ItemProps>(
  setDisplayName('Item'),
  defaultProps<ItemProps>({
    width: 100,
    slide: { src: '', alt: '' },
  })
)(ItemPure);

interface ItemsProps {
  slide: CarouselSlide[];
}

const Items: React.FunctionComponent<ItemsProps> = setDisplayName('Items')(
  ({ slide }) => (
    <>
      {slide.map((item: CarouselSlide, i: number) => (
        <Item width={ITEM_WIDTH / slide.length} slide={item} key={i} />
      ))}
    </>
  )
);

export interface CarouselProps {
  slides: Slides;
  variant: Variants;
}

export const Carousel: React.FunctionComponent<CarouselProps> = ({
  slides,
  variant = Variants.SIMPLE,
}) => (
  <BsCarousel>
    {slides.map((slide: Slide, i: number) => {
      if (Array.isArray(slide)) {
        return (
          <BsCarousel.Item key={i}>
            <Items slide={slide} />
          </BsCarousel.Item>
        );
      }

      return (
        <BsCarousel.Item key={i}>
          <Item slide={slide} />
        </BsCarousel.Item>
      );
    })}
  </BsCarousel>
);
