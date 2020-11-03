import React, { FunctionComponent } from 'react';
import { Cascade } from './cascade.component';
import { Builder } from '../builder';
import { BreakpointNumber } from './breakpoint-number.type';
import { Aspect, AspectProps } from './aspect.component';

export interface AspectsProps {
  aspects: AspectProps[];
}

const stretch = Builder<BreakpointNumber>()
  .xs(12)
  .sm(12)
  .md(6)
  .lg(4)
  .xl(3)
  .build();

export const Aspects: FunctionComponent<AspectsProps> = ({ aspects }) => (
  <Cascade layout={stretch}>
    {aspects.map((aspect, i) => (
      <Aspect {...aspect} key={i} />
    ))}
  </Cascade>
);
