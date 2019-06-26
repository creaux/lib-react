import React, { FunctionComponent, ReactElement } from 'react';
import { List } from '../List';
import { ListProps } from '../List/component';
import { Guard } from '../Guard';
import { Steps } from '../Steps';
import { StepsProps } from '../Steps/component';

type StepsComponent = ReactElement<StepsProps>;
type ListComponent = ReactElement<ListProps>;
type ChildrenComponents = [ListComponent, StepsComponent];

export interface OrderProps {
  children: ChildrenComponents;
  bare: string;
}

export const Order: FunctionComponent<OrderProps> = ({ children, bare }) => {
  return (
    <div className="w-50 mr-auto ml-auto">
      <div>
        <Guard Component={Steps}>{children}</Guard>
      </div>
      <div className="d-flex justify-content-center align-items-center text-center">
        <Guard
          Component={List}
          when={['items', 'length']}
          otherwise={() => <div>{bare}</div>}
        >
          {children}
        </Guard>
      </div>
    </div>
  );
};
