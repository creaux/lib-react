import React, { FunctionComponent, useState } from 'react';
import { Viewport } from './viewport.component';
import { Image } from './bits/visual/image/image.component';
import { ImageProps } from './bits/visual/image/image.component';
import { Button } from '../forms/Button/component';
import { ImageVariants } from './bits/visual/image/image.types';
import { Variants } from '../forms/Button/types';
import { Sizes } from './sizes.types';
import cx from 'classnames';

export interface SignpostElement {
  image: ImageProps;
  over: ImageProps;
  title: string;
  onClick: (event: any) => void;
}

export interface SignpostComponentProps {
  elements: SignpostElement[];
  linkText: string;
}

export const SignpostComponent: FunctionComponent<SignpostComponentProps> = ({
  elements,
  linkText,
}) => {
  const [state, handleMouseEnter] = useState(
    Array.from(Array(elements.length).keys(), () => false)
  );

  return (
    <Viewport>
      <div className="signpost__wrapper">
        {elements.map(({ image, over, title, onClick: handleClick }, i) => {
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
              onClick={handleClick}
            >
              <Button
                variant={Variants.LINK}
                size={Sizes.LG}
                className={cx('signpost__btn', {
                  'signpost__btn--active': state[i],
                })}
                onClick={handleClick}
              >
                <>
                  <div className="mr-2 signpost__btn-text">{linkText}</div>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-chevron-right signpost__btn-icon"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </>
              </Button>
              <h2 className="signpost__title">{title}</h2>
              <Image
                variant={ImageVariants.BACKGROUND}
                src={over.src}
                rounded={image.rounded}
                backgroundPositions={over.backgroundPositions}
                className={cx('pb-3', 'signpost__image', {
                  'signpost__image--active': state[i],
                })}
              />
              <Image
                variant={ImageVariants.BACKGROUND}
                src={image.src}
                rounded={image.rounded}
                backgroundPositions={image.backgroundPositions}
                className={cx('pb-3', 'signpost__image', {
                  'signpost__image--active': !state[i],
                })}
              />
              <div
                className={cx('signpost__overlay', {
                  'signpost__overlay--active':
                    !state[i] && state.includes(true),
                })}
              ></div>
            </div>
          );
        })}
      </div>
    </Viewport>
  );
};
