import React, { FunctionComponent, useState } from 'react';
import { Viewport } from './Viewport';
import { ImageComponent as Image } from './image.component';
import { ImageComponentProps as ImageProps } from './image.component';
import { Button } from './forms/Button/component';
import { ImageVariants } from './image.types';
import { Variants } from './forms/Button/types';
import { Sizes } from './types/sizes';
import { ChevronRight } from 'react-bootstrap-icons';
import cx from 'classnames';

export class SignpostElementBuilder {
  private image!: ImageProps;
  private over!: ImageProps;
  private title!: string;

  public withImage(image: ImageProps): SignpostElementBuilder {
    this.image = image;
    return this;
  }

  public withOver(over: ImageProps): SignpostElementBuilder {
    this.over = over;
    return this;
  }

  public withTitle(title: string): SignpostElementBuilder {
    this.title = title;
    return this;
  }

  public build(): SignpostElement {
    return {
      image: this.image,
      over: this.over,
      title: this.title,
    };
  }
}

export interface SignpostElement {
  image: ImageProps;
  over: ImageProps;
  title: string;
}

export class SignpostComponentPropsBuilder {
  private elements!: SignpostElement[];

  public withElements(
    elements: SignpostElement[]
  ): SignpostComponentPropsBuilder {
    this.elements = elements;
    return this;
  }

  public build(): SignpostComponentProps {
    return {
      elements: this.elements,
    };
  }
}

export interface SignpostComponentProps {
  elements: SignpostElement[];
}

export const SignpostComponent: FunctionComponent<SignpostComponentProps> = ({
  elements,
}) => {
  const [state, handleMouseEnter] = useState(
    Array.from(Array(elements.length).keys(), () => false)
  );

  return (
    <Viewport>
      <div className="signpost__wrapper">
        {elements.map(({ image, over, title }, i) => {
          return (
            <div
              className="signpost__item"
              key={i}
              onMouseEnter={() => {
                handleMouseEnter([...Object.assign(state, { [i]: true })]);
              }}
              onMouseLeave={() =>
                handleMouseEnter([...Object.assign(state, { [i]: false })])
              }
            >
              <Button
                variant={Variants.LINK}
                size={Sizes.LG}
                className={cx('signpost__btn', {
                  'signpost__btn--active': state[i],
                })}
              >
                <>
                  <div className="mr-2 signpost__btn-text">
                    Take a look on me!
                  </div>
                  <ChevronRight className="signpost__btn-icon" />
                </>
              </Button>
              <h2 className="signpost__title">{title}</h2>
              <Image
                variant={ImageVariants.BACKGROUND}
                src={over.src}
                rounded={image.rounded}
                className={cx('pb-3', 'signpost__image', {
                  'signpost__image--active': state[i],
                })}
              />
              <Image
                variant={ImageVariants.BACKGROUND}
                src={image.src}
                rounded={image.rounded}
                className={cx('pb-3', 'signpost__image', {
                  'signpost__image--active': !state[i],
                })}
              />
            </div>
          );
        })}
      </div>
    </Viewport>
  );
};
