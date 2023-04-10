type Task = {
  id: number,
  title: string,
  status: "toDo" | "inProgress" | "done",
  description: string,
  parentId?: number,
  place: number
};

export type { Task }