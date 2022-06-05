export type PriorityColor = string;

export interface TodoPriority {
  id: string;
  label: string;
  color: PriorityColor;
}

export interface Todo {
  id: string;
  title: string;
  isComplete: boolean;
  priorityId?: string;
}
