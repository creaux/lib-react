import { FunctionComponent, ReactElement } from "react";

export interface ConditionalProps {
  condition: boolean;
  when: (children: ReactElement) => ReactElement;
  otherwise?: (children: ReactElement) => ReactElement;
  // FIXME
  children?: any;
}

// @ts-ignore
export const Conditional: FunctionComponent<ConditionalProps> = ({
  condition,
  when,
  otherwise,
  children
}) => {
  if (condition && children) {
    return when(children);
  }

  if (otherwise && children) {
    return otherwise(children);
  }

  return children;
};
