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
 * React Component - Rendering a task along with other components
 * Can be used as a standalone component, as well as a child component
 * @param {data} : Task - Task data
 * @param {subTask} : true | undefined - Whether the task is a child of another task *NotRequired
 * @param {index} : number - Index of the task in the child list *NotRequired
 * @param {lengthList} : number - Length of the child list *NotRequired
 * @param {hanlerDelete} : void - Callback function for deleting a task from the list
 * @param {handlerMoveUp} : void - Callback function for moving a task up the list
 * @param {handlerMoveDown} : void - Callback function for moving a task down the list
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