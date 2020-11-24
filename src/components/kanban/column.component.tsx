import React, { FunctionComponent } from 'react';
import { Droppable } from 'react-beautiful-dnd';

export interface ColumnProps {
  id: string;
  title: string;
}

export const Column: FunctionComponent<ColumnProps> = ({
  id,
  title,
  children,
}) => (
  <div className="col">
    <h2>{title}</h2>
    <Droppable droppableId={id}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
);
