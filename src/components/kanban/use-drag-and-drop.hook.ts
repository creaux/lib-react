import { DropResult } from 'react-beautiful-dnd';
import { Dispatch, SetStateAction, useState } from 'react';
import { Column, KanbanState } from './kanban.state';

const { assign } = Object;

export const useDragAndDrop = (
  initialState: KanbanState
): [
  KanbanState,
  (result: DropResult) => void,
  Dispatch<SetStateAction<KanbanState>>
] => {
  const [state, setState] = useState<KanbanState>(initialState);
  const handleEndDrag = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumnIndex = state.columns
      .map((column: Column) => column.id)
      .indexOf(source.droppableId);
    const startColumn = state.columns.find(
      (column: Column) => column.id === source.droppableId
    ) as Column;
    const finishColumnIndex = state.columns
      .map((column: Column) => column.id)
      .indexOf(destination.droppableId);
    const finishColumn = state.columns.find(
      (column: Column) => column.id === destination.droppableId
    ) as Column;

    if (startColumn === finishColumn) {
      const newIncidentIds = Array.from(startColumn.incidentIds);
      newIncidentIds.splice(source.index, 1);
      newIncidentIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        incidentIds: newIncidentIds,
      };

      const newState = {
        ...state,
        columns: assign([], state.columns, { [startColumnIndex]: newColumn }),
      };

      setState(newState);
      return;
    }

    const startIncidentIds = Array.from(startColumn.incidentIds);
    startIncidentIds.splice(source.index, 1);
    const newStartColumn = {
      ...startColumn,
      incidentIds: startIncidentIds,
    };
    const finishIncidentIds = Array.from(finishColumn.incidentIds);
    finishIncidentIds.splice(destination.index, 0, draggableId);
    const newFinishColumn = {
      ...finishColumn,
      incidentIds: finishIncidentIds,
    };
    const newState = {
      ...state,
      columns: assign([], state.columns, {
        [startColumnIndex]: newStartColumn,
        [finishColumnIndex]: newFinishColumn,
      }),
    };
    setState(newState);
  };
  return [state, handleEndDrag, setState];
};
