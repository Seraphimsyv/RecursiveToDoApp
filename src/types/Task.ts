type Task = {
  id: number,
  title: string,
  status: 0 | 1 | 2,
  description: string,
  parentId?: number,
  place: number
};

export type { Task }