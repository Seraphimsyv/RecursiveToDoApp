import * as React from "react";
import { useState } from "react";
import { ToDoTask } from "../ToDoTask";
import { ToDoForm } from "../ToDoForm";
import { TaskList, ToDoListProps } from "../../types";
import { replaceTasks } from "../../utils/replaceTasks";
import { filterData } from "../../utils/filterData";

/**
 * React Component - Отрисовка списка задач
 * Может использоватся как самостоятельный компонент, а также как дочерний
 * @param {dataList} : TaskList - Список задач
 * @param {subList} : true | undefiend - Являеется ли список дочерним *NotRequired
 * @param {parentId} : number - Id задачи которая является родительским компонентом
 * @param {status} : "toDo" | "inProgress" | "done" - Статус родительской задачи
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

  return (
    <>

      {subList !== undefined ? (
        <>
          {status === "done" 
          ? null : <ToDoForm
                    parentId={parentId}
                    dataList={ filterData(data, parentId) }
                    dataUpdate={UpdateData}
                  />
          }
          {filterData(data, parentId).map((task, key) => (
            <ToDoTask
              key={key}
              data={task}
              subTask
              index={key}
              lengthList={data.length-1}
              handlerDelete={() => DeleteFromData(task.id)}
              handleMoveUp={() => UpdateTaskMoveUp(key)}
              handleMoveDown={() => UpdateTaskMoveDown(key)}
            />
          ))}
        </>
      ) : (
        <>
          <ToDoForm
            dataList={ filterData(data) }
            dataUpdate={UpdateData}
          />
          <div id="to_do_task_list">
            {filterData(data).map((task, key) => (
              <ToDoTask
                key={key}
                data={task}
                index={key}
                lengthList={data.length-1}
                handlerDelete={() => DeleteFromData(task.id)}
                handleMoveUp={() => UpdateTaskMoveUp(key)}
                handleMoveDown={() => UpdateTaskMoveDown(key)}
              />
            ))}
          </div>
        </>
      )}
    </>
  )
}

export { ToDoList }