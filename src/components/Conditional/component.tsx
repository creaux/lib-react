import { FunctionComponent, ReactElement } from 'react';

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
  if (condition) {
    return when(children || null);
  }

  if (otherwise) {
    return otherwise(children || null);
  }

  return children || null;
};
