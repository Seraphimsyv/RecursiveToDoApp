import { Task } from "./Task"
import { TaskList } from "./TaskList"

type TaskProps = {
  data: Task,
  subTask?: true,
  index?: number,
  lengthList?: number,
  handlerDelete: () => void,
  handleMoveUp: () => void,
  handleMoveDown: () => void,
}

type TaskTitleProps = {
  text: string,
  status: "toDo" | "inProgress" | "done"
}

type TaskBarProps = {
  id: number,
  subTask?: true,
  index?: number,
  lengthList?: number,
  handlerDelete: () => void,
  handleMoveUp?: () => void,
  handleMoveDown?: () => void,
}

type TaskHeaderProps = {
  title: TaskTitleProps,
  bar: TaskBarProps
}

type TaskContentProps = {
  description: string
}

type ToDoListProps = {
  dataList: Task[],
  subList?: true,
  parentId?: number,
  status?: "toDo" | "inProgress" | "done"
}

type FormProps = {
  parentId?: number,
  dataList: Task[],
  dataUpdate: (arr: TaskList) => void
}

export type { 
  TaskProps,
  TaskTitleProps,
  TaskBarProps,
  TaskHeaderProps,
  TaskContentProps,
  ToDoListProps,
  FormProps
}