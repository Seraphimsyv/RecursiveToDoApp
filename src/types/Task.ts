type Task = {
  id: number,
  title: string,
  status: "toDo" | "inProgress" | "done",
  description: string,
  parentId?: number,
  index?: number
};

export type { Task }