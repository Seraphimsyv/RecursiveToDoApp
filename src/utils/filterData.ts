import { Task, TaskList } from "../types"

const filterData = (arr: TaskList, parentId?: number) => {
  if (parentId) {
    return arr.filter(( task: Task ) => task.parentId === parentId);
  } else {
    return arr.filter(( task: Task ) => task.parentId === undefined);
  }
}

export { filterData }