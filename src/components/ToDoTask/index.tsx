import * as React from "react";
import { useState } from "react";
import { ToDoList } from "../ToDoList";
import { Header } from "./Header";
import { Content } from "./Content";
import { TaskProps } from "../../types";
import { dataTask } from "../../data/tasks";
import { filterData } from "../../utils/filterData";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

/**
 * React Component - Отрисовка задачи вместе с другими компонентами 
 * Может использоватся как самостоятельный компонент, а также как дочерний
 * @param {data} : Task - Данные задачи
 * @param {subTask} : true | undefiend - Является ли задача дочерней другой задачи *NotRequired
 * @param {index} : number - Индекс задачи в дочерном списке *NotRequired
 * @param {lengthList} : number - Длина дочернего списка *NotRequired
 * @param {hanlerDelete} : void - Колбек удаления задачи из списка
 * @param {handlerMoveUp} : void - Перемещение задачи по списку выше
 * @param {handlerMoveDown} : void - Перемещение задачи по списку вних
 */
const ToDoTask : React.FC<TaskProps> = (
  { data, subTask, index, lengthList, handlerDelete, handleMoveUp, handleMoveDown } : TaskProps
) => {
  const [collapse, setCollapse] = useState(true);

  const HandlerMovement = (moveTo: "up" | "down") => {
    if (moveTo === "up") {
      handleMoveUp();
    } else {
      handleMoveDown();
    }

    setCollapse(true);
  }

  const titleData = {
    text: data.title,
    status: data.status
  };
  const barData = {
    id: data.id,
    subTask: subTask,
    index: index,
    lengthList: lengthList,
    handlerDelete: handlerDelete,
    handleMoveUp: () => HandlerMovement("up"),
    handleMoveDown: () => HandlerMovement("down")
  }

  return (
    <Card
      className={`to_do_task_card ${collapse === true ? "card_hidden" : "show_card"}`}
    >
      <CardContent>
        <div>
          <Header title={titleData} bar={barData} />
          {collapse === false ? (
            <>
              <Content description={data.description} />
              <div className="card_sublist">
                <ToDoList dataList={ filterData(dataTask, data.id) } subList parentId={data.id} status={data.status} />
              </div>
            </>
          ) : null}
          <CardActions sx={{ display: "flex", justifyContent: "center" }} >
            <Button variant="contained" size="small"onClick={() => setCollapse(!collapse)}>
              Show More
            </Button>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  )
}

export { ToDoTask }