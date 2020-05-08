import React, { ComponentType, ReactElement } from "react";
import { FieldType } from "../types";

export const provideFieldType = <P extends { fieldType: FieldType }>(
  fieldType: FieldType
) => {
  return (Component: ComponentType<P>) => (
    props: P & { fieldType: FieldType }
  ): ReactElement<P & { fieldType: FieldType }> => {
    const withTypeProps = { ...props, fieldType };
    return <Component {...withTypeProps} />;
  };
};
