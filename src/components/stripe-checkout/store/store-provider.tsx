import React, { ComponentType } from 'react';
import { Provider } from 'react-redux';

export const storeProvider = (store: any) => (Component: ComponentType) => (
  props: any
) => (
  <Provider store={store}>
    <Component {...props} />
  </Provider>
);
