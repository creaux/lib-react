import { FunctionComponent, ReactElement } from "react";

interface SwitchProps {
  cases: number;
  children: ReactElement[];
}

export const Switch: FunctionComponent<SwitchProps> = ({ cases, children }) => {
  switch (cases) {
    case 0:
      return children[0];
    case 1:
      return children[1];
    default:
      return children[2];
  }
};
