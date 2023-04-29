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
 * @param data Task data
 * @param place Place of the task in the child list
 * @param lengthList Length of the child list
 * @param handlerUpdate Data update function.
 */
const ToDoTask : React.FC<TaskProps> = ( props ) => {
  const [collapse, setCollapse] = useState(true);

  const titleData = {
    text: props.data.title,
    status: props.data.status
  };
  const barData = {
    id: props.data.id,
    place: props.place,
    lengthList: props.lengthList,
    handlerUpdate: props.handlerUpdate
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
              <Content description={props.data.description} />
              <div className="card_sublist">
                <ToDoList
                  parentId={props.data.id}
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