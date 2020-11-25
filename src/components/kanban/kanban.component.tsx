import React, { ComponentType, FunctionComponent } from 'react';
import { Column, ColumnProps } from './column.component';
import { Builder } from '../../builder';
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd';
import { Column as IColumn, Incident, KanbanState } from './kanban.state';

export interface KanbanProps {
  state: KanbanState;
  onDragEnd: (result: DropResult) => void;
  Incident: ComponentType<any>;
}

export const Kanban: FunctionComponent<KanbanProps> = ({
  Incident,
  state,
  onDragEnd: handleDragEnd,
}) => {
  const findColumn = (id: string): IColumn =>
    state.columns.find((column: IColumn) => column.id === id) as IColumn;

  const findColumnIncidents = (column: IColumn): Incident[] =>
    column.incidentIds.map((id) =>
      state.incidents.find((incident: Incident) => incident.id === id)
    ) as Incident[];

  const columnMapper = (column: IColumn): ColumnProps =>
    Builder<ColumnProps>().title(column.title).id(column.id).build();

  return (
    <div className="container">
      <div className="row">
        <DragDropContext onDragEnd={handleDragEnd}>
          {state.order.map((id: string) => {
            const column = findColumn(id);
            const incidents = findColumnIncidents(column);

            const columnProps: ColumnProps = columnMapper(column);

            return (
              <Column key={column.id} {...columnProps}>
                {incidents.map((incident, index) => {
                  return (
                    <Draggable
                      draggableId={incident.id}
                      index={index}
                      key={incident.id}
                    >
                      {(provided) => {
                        const props = {
                          provided: {
                            ...provided.draggableProps,
                            ...provided.dragHandleProps,
                          },
                          props: incident,
                          ref: provided.innerRef,
                          key: incident.id,
                        };

                        return <Incident {...props} />;
                      }}
                    </Draggable>
                  );
                })}
              </Column>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
};
