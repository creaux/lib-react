import React, { ComponentType, forwardRef, ReactNode } from 'react';
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from 'react-beautiful-dnd';

export function createIncident<P>(Component: ComponentType<P>) {
  return forwardRef<
    HTMLDivElement,
    {
      props: P;
      provided: DraggableProvidedDragHandleProps &
        DraggableProvidedDraggableProps;
    }
  >((props, ref) => {
    return (
      <div ref={ref} {...props.provided}>
        <Component {...props.props} />
      </div>
    );
  });
}
