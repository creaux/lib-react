import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Builder } from '../../../builder';
import { Kanban, KanbanProps } from './kanban.container';
import { Task, TaskProps } from './task.component';
import { Column } from './kanban.state';
import { KanbanConfirm, KanbanConfirmProps } from './kanban-confirm.container';
import { createKind, Kinds } from '../../structure.enum';

export default Builder<Meta>()
  .title(createKind(Kinds.EXPLICIT, 'Kanban'))
  .component(Kanban)
  .build();

const KanbanBasicTemplate: Story<KanbanProps> = (args) => {
  return <Kanban {...args} Incident={Task} />;
};

const KanbanConfirmTemplate: Story<KanbanConfirmProps> = (args) => (
  <KanbanConfirm {...args} />
);

export const Default = KanbanBasicTemplate.bind({});
export const Confirm = KanbanConfirmTemplate.bind({});

enum Incidents {
  FIRST = 'FIRST',
  SECOND = 'SECOND',
}

enum Columns {
  START = 'START',
  END = 'END',
}

Default.args = Builder<KanbanProps>()
  .incidents([
    Builder<TaskProps>()
      .id(Incidents.FIRST)
      .title('Hello')
      .subtitle('World')
      .build(),
    Builder<TaskProps>()
      .id(Incidents.SECOND)
      .title('Hi')
      .subtitle('Earth')
      .build(),
  ])
  .columns([
    Builder<Column>()
      .title('Start')
      .incidentIds([Incidents.FIRST, Incidents.SECOND])
      .id(Columns.START)
      .build(),
    Builder<Column>().title('End').incidentIds([]).id(Columns.END).build(),
  ])
  .order([Columns.START, Columns.END])
  .Incident(Task)
  .build();

Confirm.args = Builder<KanbanConfirmProps>()
  .incidents([
    Builder<TaskProps>()
      .id(Incidents.FIRST)
      .title('Hello')
      .subtitle('World')
      .build(),
    Builder<TaskProps>()
      .id(Incidents.SECOND)
      .title('Hi')
      .subtitle('Earth')
      .build(),
  ])
  .columns([
    Builder<Column>()
      .title('Start')
      .incidentIds([Incidents.FIRST, Incidents.SECOND])
      .id(Columns.START)
      .build(),
    Builder<Column>().title('End').incidentIds([]).id(Columns.END).build(),
  ])
  .order([Columns.START, Columns.END])
  .Incident(Task)
  .build();
