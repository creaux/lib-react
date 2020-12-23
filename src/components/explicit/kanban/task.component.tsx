import React, { FunctionComponent } from 'react';
import { createIncident } from './create-incident.hoc';
import { Incident } from './kanban.state';

export interface TaskProps extends Incident {
  title: string;
  subtitle: string;
}

export const TaskComponent: FunctionComponent<TaskProps> = ({
  title,
  subtitle,
}) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{subtitle}</p>
    </div>
  </div>
);

export const Task = createIncident<TaskProps>(TaskComponent);
