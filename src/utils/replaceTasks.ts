import { Task } from "../types"
/**
 * @param {data}: Task[] - List of tasks.
 * @param {task}: Task - The task to swap positions with.
 * @param {moveTo}: "up" | "down" - The direction in which to swap the tasks.
 * @param {parentId}: number - Parent ID for swapping positions among child objects.
 * @returns - Returns the processed list
 */
const replaceTasks = (data: Task[], task: Task, moveTo: "up" | "down", parentId?: number) : Task[] => {
  let swappedIndex : number | null = null;
  let currentIndex : number | null = null;

  for(let i = 0; i < data.length; i++) {
    if(data[i].id === task.id) {
      currentIndex = i;
    }
    if(
      (parentId === undefined && data[i].parentId === undefined) ||
      (parentId !== undefined && data[i].parentId === parentId)
    ) {
      if(moveTo === "up" && data[i].place === task.place-1) {
        swappedIndex = i;
      }
      if(moveTo === "down" && data[i].place === task.place+1) {
        swappedIndex = i;
      }
    }
  }

  if(swappedIndex !== null && currentIndex !== null) {
    if(moveTo === "up") {
      data[swappedIndex].place += 1;
      data[currentIndex].place -= 1;
    } else {
      data[swappedIndex].place -= 1;
      data[currentIndex].place += 1;
    }
  }

  return data;
}

export { replaceTasks }