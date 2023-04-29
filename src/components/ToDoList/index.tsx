import * as React from "react";
import { useState, useEffect } from "react";
import { TaskService } from "../../service/TaskService";
import { ToDoTask } from "../ToDoTask";
import { ToDoForm } from "../ToDoForm";
import { Task, ToDoListProps } from "../../types";
/**
 * React Component - Rendering Task List
 * Can be used as a standalone component, as well as a child component
 * @param parentId number - ID of the task that is the parent component
 */
const ToDoList : React.FC<ToDoListProps> = ( props : ToDoListProps) => {
  const [data, setData] = useState<Task[]>([]);

  useEffect(() => {
    TaskService.update(setData, props.parentId);
  }, [props.parentId])
  
  return (
    <>
      {props.parentId !== undefined ? null : (
        <>
          <ToDoForm
            parentId={props.parentId}
            handlerUpdate={setData}
          />
        </>
      )}
      {data.map((task, key) => (
        <ToDoTask
          key={key}
          data={task}
          place={task.place}
          lengthList={data.length-1}
          handlerUpdate={setData}
        />
      ))}
      {props.parentId !== undefined ? (
        <>
          <ToDoForm
            parentId={props.parentId}
            handlerUpdate={setData}
          />
        </>
      ) : null}
    </>
  )
}

export { ToDoList }