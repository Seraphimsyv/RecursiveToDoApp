import { Task } from "../types"

/**
 * React Component - Filter for displaying task list in different places
 * @param {arr} - List of tasks to filter
 * @param {parentId} - Parent id if the filtered list will be displayed as a child
 * @returns - Returns the filtered list
 */
const filterData = (arr: Task[], parentId?: number) => {
  if (parentId) {
    return arr.filter(( task: Task ) => task.parentId === parentId);
  } else {
    return arr.filter(( task: Task ) => task.parentId === undefined);
  }
}

export { filterData }