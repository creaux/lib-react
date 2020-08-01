import { ComponentType, createElement } from 'react';

export const provideIsTouchDevice = <P>(
  Component: ComponentType<P & { isTouchDevice: boolean }>
) => (props: P) => {
  return createElement(Component, {
    ...props,
    isTouchDevice:
      'ontouchstart' in window ||
      (typeof window.DocumentTouch !== 'undefined' &&
        document instanceof window.DocumentTouch),
  });
};
