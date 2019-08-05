import { InputTypeEnum } from "../../types";
import React, { ComponentType, ReactElement } from "react";

export const type = <P extends {}>(type: InputTypeEnum) => {
  return (Component: ComponentType<P>) => (
    (props: P & { type: InputTypeEnum }): ReactElement<P & { type: InputTypeEnum }> => {
      const withTypeProps = { ...props, type };
      return <Component {...withTypeProps} />;
    }
  )
};
