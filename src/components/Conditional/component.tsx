import { FunctionComponent, ReactNode, Children } from "react";

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
}) => (condition ? when(children) : otherwise ? otherwise(children) : null);
