import { Dispatch, SetStateAction } from "react"
import { Task } from "./Task"

type TaskProps = {
  data: Task,
  place: number,
  lengthList: number,
  handlerUpdate: Dispatch<SetStateAction<Task[]>>
}

type TaskTitleProps = {
  text: string,
  status: 0 | 1 | 2
}

type TaskBarProps = {
  id: number,
  place: number,
  lengthList: number,
  handlerUpdate: Dispatch<SetStateAction<Task[]>>
}

type TaskHeaderProps = {
  title: TaskTitleProps,
  bar: TaskBarProps
}

type TaskContentProps = {
  description: string
}

type ToDoListProps = {
  parentId?: number,
}

type ToDoFormProps = {
  parentId?: number,
  handlerUpdate: Dispatch<SetStateAction<Task[]>>,
}

export type { 
  TaskProps,
  TaskTitleProps,
  TaskBarProps,
  TaskHeaderProps,
  TaskContentProps,
  ToDoListProps,
  ToDoFormProps
}