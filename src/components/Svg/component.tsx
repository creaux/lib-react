import React, { FunctionComponent } from 'react';

/**
 * Svg properties.
 */
export interface SvgProps {
  Svg: any;
  /** link to url */
  link: string;
  aria?: {
    label: string;
  };
  fill?: string;
  width?: number;
}

/**
 * Svg component.
 *
 * @visibleName Logotype
 */
export const Svg: FunctionComponent<SvgProps> = ({
  Svg,
  link,
  aria = { label: undefined },
  fill = 'white',
  width = 100,
}) => (
  <a
    href={link}
    aria-label={aria.label}
    className="svg"
    style={{ width: `${width}px` }}
  >
    <Svg style={{ fill }} />
  </a>
);
