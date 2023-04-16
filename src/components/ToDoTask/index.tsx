import * as React from "react";
import { useState } from "react";
import { ToDoList } from "../ToDoList";
import { Header } from "./Header";
import { Content } from "./Content";
import { TaskProps } from "../../types";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
/**
 * React Component - Rendering a task along with other components
 * Can be used as a standalone component, as well as a child component
 * @param {data} : Task - Task data
 * @param {dataList} : Task[] - List of tasks
 * @param {place} : number - Place of the task in the child list *NotRequired
 * @param {lengthList} : number - Length of the child list *NotRequired
 * @param {handlerUpdate}: Callback - Data update function.
 */
const ToDoTask : React.FC<TaskProps> = (
  {
    data, dataList, place, 
    lengthList, handlerUpdate
  } : TaskProps
) => {
  const [collapse, setCollapse] = useState(true);

  const titleData = {
    text: data.title,
    status: data.status
  };
  const barData = {
    id: data.id,
    place: place,
    lengthList: lengthList,
    handlerUpdate: handlerUpdate
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
                <ToDoList
                  dataList={dataList}
                  parentId={data.id}
                  handlerUpdate={handlerUpdate}
                />
              </div>
            </>
          ) : null}
          <CardActions sx={{ display: "flex", justifyContent: "center" }} >
            <Button variant="contained" size="small"onClick={() => setCollapse(!collapse)}>
              {collapse !== false ? "show more" : "hide"}
            </Button>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  )
}

export { ToDoTask }