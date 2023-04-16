import { Task } from "./Task"

type TaskProps = {
  data: Task,
  dataList: Task[],
  place: number,
  lengthList: number,
  handlerUpdate: () => void
}

type TaskTitleProps = {
  text: string,
  status: "toDo" | "inProgress" | "done"
}

type TaskBarProps = {
  id: number,
  place: number,
  lengthList: number,
  handlerUpdate: () => void
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
  handlerUpdate: () => void
}

type FormProps = {
  parentId?: number,
  handlerUpdate: () => void
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