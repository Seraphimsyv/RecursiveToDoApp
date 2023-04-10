import * as React from "react";
import { ToDoTask } from "../ToDoTask";
import { ToDoForm } from "../ToDoForm";
import { Task, ToDoListProps } from "../../types";
import { filterData } from "../../utils/filterData";

/**
 * React Component - Rendering Task List
 * Can be used as a standalone component, as well as a child component
 * @param {dataList}: Task[] - List of tasks
 * @param {parentId}: number - ID of the task that is the parent component
 */
const ToDoList : React.FC<ToDoListProps> = (
  {
    dataList, parentId,
    handlerUpdate, handlerDelete,
    handlerMoveUp, handlerMoveDown
  } : ToDoListProps
) => {
  const newData = filterData(dataList, parentId)
    .sort((a: Task, b: Task) => {
      if (a.place > b.place) {
        return 1; }
      if (a.place < b.place) {
        return -1; }
      return 0;
    });

  return (
    <>
      {(
        <>
          <ToDoForm
            parentId={parentId}
            dataList={newData}
            dataUpdate={handlerUpdate}
          />
        </>
      )}
      {newData.map((task, key) => (
        <ToDoTask
          dataList={dataList}
          key={key}
          data={task}
          place={task.place}
          lengthList={newData.length-1}
          handlerUpdate={handlerUpdate}
          handlerDelete={handlerDelete}
          handlerMoveUp={handlerMoveUp}
          handlerMoveDown={handlerMoveDown}
        />
      ))}
    </>
  )
}

export { ToDoList }