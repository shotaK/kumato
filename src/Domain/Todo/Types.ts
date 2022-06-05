export type PriorityColor = string;

export interface Todo {
  id: string;
  title: string;
  isComplete: boolean;
}

export interface TodoPriority {
  id: string;
  label: string;
  color: PriorityColor;
}
