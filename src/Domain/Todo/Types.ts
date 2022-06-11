export type PriorityColor = string;

export const TodoStatus = {
  default: "default",
  started: "started",
  paused: "paused",
} as const;

export type TodoStatus = typeof TodoStatus[keyof typeof TodoStatus];

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
  status: TodoStatus;
}
