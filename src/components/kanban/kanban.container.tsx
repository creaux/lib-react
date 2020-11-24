import React, { ComponentType, FunctionComponent } from 'react';
import { Builder } from '../../builder';
import {
  Kanban as KanbanComponent,
  KanbanProps as KanbanComponentProps,
} from './kanban.component';
import { useDragAndDrop } from './use-drag-and-drop.hook';
import { Column, KanbanState, Incident } from './kanban.state';

export interface KanbanProps {
  incidents: Incident[];
  columns: Column[];
  order: string[];
  Incident: ComponentType<any>;
}

export const Kanban: FunctionComponent<KanbanProps> = ({
  incidents,
  columns,
  order,
  Incident,
}) => {
  const [state, handleDragEnd] = useDragAndDrop(
    Builder<KanbanState>()
      .columns(columns)
      .incidents(incidents)
      .order(order)
      .build()
  );

  const kanbanProps = Builder<KanbanComponentProps>()
    .state(state)
    .onDragEnd(handleDragEnd)
    .Incident(Incident)
    .build();

  return <KanbanComponent {...kanbanProps} />;
};
