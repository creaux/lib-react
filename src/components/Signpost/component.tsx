import React, { FunctionComponent } from 'react';
import { Viewport } from '../Viewport';
import { Image } from '../Image';
import { ImageProps } from '../Image/component';
import { Button } from '../forms/Button/component';
import { ImageVariants } from '../Image/types';
import { Variants } from '../forms/Button/types';
import { Sizes } from '../types/sizes';

export class SignpostElementBuilder {
  private image!: ImageProps;

  public withImage(image: ImageProps): SignpostElementBuilder {
    this.image = image;
    return this;
  }

  public build(): SignpostElement {
    return {
      image: this.image
    };
  }
}

export interface SignpostElement {
  image: ImageProps;
}

export class SignpostPropsBuilder {
  private elements!: SignpostElement[];

  public withElements(elements: SignpostElement[]): SignpostPropsBuilder {
    this.elements = elements;
    return this;
  }

  public build(): SignpostProps {
    return {
      elements: this.elements
    };
  }
}

export interface SignpostProps {
  elements: {
    image: ImageProps;
  }[];
}

export const Signpost: FunctionComponent<SignpostProps> = ({ elements }) => (
  <Viewport>
    <div className="signpost__wrapper">
      {elements.map(({ image }, i) => {
        return (
          <div className="signpost__item">
            <Image
              variant={ImageVariants.BACKGROUND}
              src={image.src}
              key={i}
              rounded={image.rounded}
              className="d-flex align-items-center justify-content-center"
            >
              <Button
                variant={Variants.OUTLINE_LIGHT}
                size={Sizes.LG}
                className="w-75"
              >
                <>
                  <div>VIRGIN</div>
                  <div>Take a look</div>
                </>
              </Button>
            </Image>
          </div>
        );
      })}
    </div>
  </Viewport>
);
