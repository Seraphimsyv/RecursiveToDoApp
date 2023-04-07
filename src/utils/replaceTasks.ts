import { TaskList } from "../types"

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