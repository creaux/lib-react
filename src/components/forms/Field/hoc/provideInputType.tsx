import { InputTypeEnum, TypeProps } from "../../types";
import React, { ComponentType, ReactElement } from "react";

export const provideInputType = <P extends TypeProps>(type: InputTypeEnum) => {
  return (Component: ComponentType<P>) => (
    props: P & { type: InputTypeEnum }
  ): ReactElement<P & { type: InputTypeEnum }> => {
    const withTypeProps = { ...props, type };
    return <Component {...withTypeProps} />;
  };
};
