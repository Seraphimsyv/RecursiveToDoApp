import { TaskList } from "../types"

const dataTask : TaskList = [
  {
    id: 1,
    title: "Task 1",
    description: "Text task",
    status: "toDo"
  },
  {
    id: 2,
    title: "Task 2",
    description: "Text task",
    status: "inProgress"
  },
  {
    id: 3,
    title: "Task 3",
    description: "Text task",
    status: "done"
  },
  {
    id: 4,
    title: "Task 2.1",
    parentId: 2,
    description: "Text task",
    status: "toDo",
    index: 0
  },
  {
    id: 5,
    title: "Task 2.2",
    parentId: 2,
    description: "Text task",
    status: "toDo",
    index: 1
  }
]

export { dataTask }