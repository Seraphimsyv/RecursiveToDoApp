import { Task } from "./Task"

type TaskProps = {
  data: Task,
  dataList: Task[],
  place: number,
  lengthList: number,
  handlerUpdate: (task: Task) => void,
  handlerDelete: (id: number) => void,
  handlerMoveUp: (task: Task, parentId?: number) => void,
  handlerMoveDown: (task: Task, parentId?: number) => void,
}

type TaskTitleProps = {
  text: string,
  status: "toDo" | "inProgress" | "done"
}

type TaskBarProps = {
  id: number,
  place: number,
  lengthList?: number,
  handlerDelete: (id: number) => void,
  handlerMoveUp: () => void,
  handlerMoveDown: () => void,
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
  parentId?: number,
  handlerUpdate: (task: Task) => void,
  handlerDelete: (id: number) => void,
  handlerMoveUp: (task: Task, parentId?: number) => void,
  handlerMoveDown: (task: Task, parentId?: number) => void,
}

type FormProps = {
  parentId?: number,
  dataList: Task[],
  dataUpdate: (task: Task) => void
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