import { TaskList } from "../types"

/**
 * Смена мест отображения двух компонентов задач 
 * @param data - Список задач где будет перемешиватся
 * @param index - Индекс задачи в списке 
 * @param moveTo - В каком напрвлении будет обмен местами
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