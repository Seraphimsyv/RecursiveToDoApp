import { TaskList } from "../types"

/**
 * Function to swap the position of two task components
 * @param data - List of tasks to swap within
 * @param index - Index of the task in the list
 * @param moveTo - The direction in which to swap the tasks.
 */
const replaceTasks = (data: TaskList, index: number, moveTo: "up" | "down") => {
  if (data.length > 0) {
    if (moveTo === "up") {
      data.splice(index-1, 2,  data[index], data[index-1]);
    } else {
      data.splice(index, 2,  data[index+1], data[index]);
    }
  }
}

export { replaceTasks }