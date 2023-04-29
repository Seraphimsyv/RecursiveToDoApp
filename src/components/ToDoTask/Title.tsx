import * as React from "react";
import { TaskTitleProps } from "../../types";
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
/**
 * React Component - for displaying the title of the task together with its status
 * @param text Task title
 * @param status Task status # 0 - "To Do" | 1 - "In Progress" | 2 - "Done"
 */
const Title : React.FC<TaskTitleProps> = ( { text, status } : TaskTitleProps ) => {
  return (
    <>
      <div className="card_title">
        <Typography variant="h5" component="div">
          {text}
        </Typography>
        <Chip
          sx={{ marginLeft: "5%" }}
          label={status === 0 ? "To Do" :
            status === 1 ? "In Progress" : "Done"}
          color={status === 0 ? "secondary" :
            status === 1 ? "primary" : "success"}
        />
      </div>
    </>
  )
}

export { Title }