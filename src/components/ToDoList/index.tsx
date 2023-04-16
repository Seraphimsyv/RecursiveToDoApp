import * as React from "react";
import { useState, useEffect } from "react";
import { ToDoTask } from "../ToDoTask";
import { ToDoForm } from "../ToDoForm";
import { Task, ToDoListProps } from "../../types";
/**
 * React Component - Rendering Task List
 * Can be used as a standalone component, as well as a child component
 * @param {dataList}: Task[] - List of tasks
 * @param {parentId}: number - ID of the task that is the parent component
 * @param {handlerUpdate}: Callback - Data update function.
 */
const ToDoList : React.FC<ToDoListProps> = ({
  dataList, parentId, handlerUpdate
} : ToDoListProps) => {
  const [data, setData] = useState<Task[]>([]);

  useEffect(() => {
    if(parentId !== undefined) {
      fetch(`/tasks/${parentId}`)
      .then(res => res.json())
      .then(res => setData(res));
    } else {
      setData(dataList);
    }
  }, [parentId, dataList])
  
  return (
    <>
      {parentId !== undefined ? null : (
        <>
          <ToDoForm
            parentId={parentId}
            handlerUpdate={handlerUpdate}
          />
        </>
      )}
      {data.map((task, key) => (
        <ToDoTask
          dataList={data}
          key={key}
          data={task}
          place={task.place}
          lengthList={data.length-1}
          handlerUpdate={handlerUpdate}
        />
      ))}
      {parentId !== undefined ? (
        <>
          <ToDoForm
            parentId={parentId}
            handlerUpdate={handlerUpdate}
          />
        </>
      ) : null}
    </>
  )
}

export { ToDoList }