import { FunctionComponent, ReactNode } from "react";

export interface ConditionalProps {
  condition: boolean;
  when: (children: ReactNode) => ReactNode;
  otherwise?: (children: ReactNode) => ReactNode;
  children?: ReactNode;
}

export const Conditional: FunctionComponent<ConditionalProps> = ({
  condition,
  when,
  otherwise,
  children
}) => {
  if (condition) {
    return when(children);
  }

  if (otherwise) {
    return otherwise(children);
  }

  return null;
};
