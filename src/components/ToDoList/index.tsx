import * as React from "react";
import { useState } from "react";
import { ToDoTask } from "../ToDoTask";
import { ToDoForm } from "../ToDoForm";
import { TaskList, ToDoListProps } from "../../types";
import { replaceTasks } from "../../utils/replaceTasks";
import { filterData } from "../../utils/filterData";

/**
 * React Component - Rendering Task List
 * Can be used as a standalone component, as well as a child component
 * @param {dataList}: TaskList - List of tasks
 * @param {subList}: true | undefined - Is the list a child component *Not Required
 * @param {parentId}: number - ID of the task that is the parent component
 * @param {status}: "toDo" | "inProgress" | "done" - Status of the parent task
 */
const ToDoList : React.FC<ToDoListProps> = ({ dataList, subList, parentId, status } : ToDoListProps ) => {
  const [data, setData] = useState( dataList );
  const [count, setCount] = useState(0);

  const DeleteFromData = (id: number) => {
    for(let i = 0; i < data.length; i++) {
      if (data[i].id === id || data[i]?.parentId === id) {
        data.splice(i, 1);
      }
    }

    UpdateData(data);
  }
  const UpdateData = (arr: TaskList) => {
    setData(() => arr);
    setCount(() => count+1);
  }
  const UpdateTaskMoveUp = (index: number) => {
    if (data.length !== 0 ) {
      replaceTasks(data, index, "up")
      setData(() => data);
      setCount(() => count+1);
    }
  }
  const UpdateTaskMoveDown = (index: number) => {
    if (data.length !== 0 ) {
      replaceTasks(data, index, "down")
      setData(() => data);
      setCount(() => count+1);
    }
  }

  const newData = parentId ? filterData(data, parentId) : filterData(data)

  return (
    <>
      {(
        <>
          <ToDoForm
            parentId={parentId}
            dataList={newData}
            dataUpdate={UpdateData}
          />
        </>
      )}
      {newData.map((task, key) => (
        <ToDoTask
          key={key}
          data={task}
          index={key}
          lengthList={newData.length-1}
          handlerDelete={() => DeleteFromData(task.id)}
          handleMoveUp={() => UpdateTaskMoveUp(key)}
          handleMoveDown={() => UpdateTaskMoveDown(key)}
        />
      ))}
    </>
  )
}

export { ToDoList }