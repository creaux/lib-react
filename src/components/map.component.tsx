import React, { ReactElement, Children } from 'react';

export interface MapProps<T> {
  As: Function;
  from: T;
}

export function Map<T extends Array<any>>({
  As,
  from,
}: MapProps<T>): ReactElement<MapProps<T>> {
  return Children.map(from, (props, i) => <As {...props} key={i} />);
}
