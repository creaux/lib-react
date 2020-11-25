export interface Column {
  id: string;
  title: string;
  incidentIds: string[];
}

export interface Incident {
  id: string;
}

export interface KanbanState {
  order: string[];
  incidents: Incident[];
  columns: Column[];
}
