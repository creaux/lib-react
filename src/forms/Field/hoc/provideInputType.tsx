import React, { ComponentType, ReactElement } from 'react';
import { InputTypeEnum, TypeProps } from '../types';

export const provideInputType = <P extends TypeProps>(type: InputTypeEnum) => {
  return (Component: ComponentType<P>) => (
    props: P & { type: InputTypeEnum }
  ): ReactElement<P & { type: InputTypeEnum }> => {
    const withTypeProps = { ...props, type };
    return <Component {...withTypeProps} />;
  };
};
