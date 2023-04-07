import { Task, TaskList } from "../types"

/**
 * Фильтрация списка задал для отображения в разных местах
 * @param {arr} - Список задач для фильтрации
 * @param {parentId} - Родительский id, если отфильтрованный список будет отображатся как дочерний
 * @returns - Возврат фильтрованного списка
 */
const filterData = (arr: TaskList, parentId?: number) => {
  if (parentId) {
    return arr.filter(( task: Task ) => task.parentId === parentId);
  } else {
    return arr.filter(( task: Task ) => task.parentId === undefined);
  }
}

export { filterData }