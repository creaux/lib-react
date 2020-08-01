import { ComponentType, createElement } from 'react';

export const provideIsTouchDevice = <P>(
  Component: ComponentType<P & { isTouchDevice: boolean }>
) => (props: P) => {
  return createElement(Component, {
    ...props,
    isTouchDevice:
      'ontouchstart' in window ||
      // @ts-ignore
      (typeof window.DocumentTouch !== 'undefined' &&
        // @ts-ignore
        document instanceof window.DocumentTouch),
  });
};
