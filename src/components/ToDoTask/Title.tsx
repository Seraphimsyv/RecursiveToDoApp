import * as React from "react";
import { TaskTitleProps } from "../../types";

import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const Title : React.FC<TaskTitleProps> = ({ text, status } : TaskTitleProps) => {
  return (
    <>
      <div className="card_title">
        <Typography variant="h5" component="div">
          {text}
        </Typography>
        <Chip
          sx={{ marginLeft: "5%" }}
          label={status === "toDo" ? "To Do" :
            status === "inProgress" ? "In Progress" : "Done"}
          color={status === "toDo" ? "secondary" :
            status === "inProgress" ? "primary" : "success"}
        />
      </div>
    </>
  )
}

export { Title }
export type { TaskTitleProps }