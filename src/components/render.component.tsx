import { FunctionComponent, cloneElement } from 'react';

/**
 * Svg properties.
 */
export interface RenderProps {
  children: any;
}

/**
 * Svg component.
 *
 * @visibleName Logotype
 */
export const Render: FunctionComponent<RenderProps> = ({
  children,
  ...props
}) => cloneElement(children, props);
