import React, { FunctionComponent, useState } from 'react';
import { Builder } from '../../../builder';
import { Modal, ModalProps } from '../../modal';
import { KanbanProps as KanbanContainerProps } from './kanban.container';
import { KanbanProps, Kanban } from './kanban.component';
import { useDragAndDrop } from './use-drag-and-drop.hook';
import { KanbanState } from './kanban.state';
import { DropResult } from 'react-beautiful-dnd';

export interface KanbanConfirmProps extends KanbanContainerProps {}

export const KanbanConfirm: FunctionComponent<KanbanConfirmProps> = ({
  incidents,
  columns,
  order,
  Incident,
}) => {
  const initialState = Builder<KanbanState>()
    .columns(columns)
    .incidents(incidents)
    .order(order)
    .build();
  const [drop, handleDrop, setDrop] = useDragAndDrop(initialState);
  const [previous, setPrevious] = useState<KanbanState>();
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const handleDragged = (result: DropResult) => {
    if (
      result.destination &&
      result.source.droppableId !== result.destination.droppableId
    ) {
      setPrevious(drop);
      setShowConfirm(true);
    }
    handleDrop(result);
  };

  const handleConfirm = () => {
    setShowConfirm(false);
  };

  const handleCancel = () => {
    setShowConfirm(false);

    if (previous) {
      setDrop(previous);
    }
  };

  const kanbanProps = Builder<KanbanProps>()
    .Incident(Incident)
    .onDragEnd(handleDragged)
    .state(drop)
    .build();

  const modalProps = Builder<ModalProps>()
    .onHide(handleCancel)
    .onCancel(handleCancel)
    .onConfirm(handleConfirm)
    .show(showConfirm)
    .build();

  return (
    <>
      <Modal {...modalProps} />
      <Kanban {...kanbanProps} />
    </>
  );
};
