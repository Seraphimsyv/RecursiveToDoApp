import * as React from "react";
import { useState } from "react";
import { TaskService } from "../../service/TaskService";
import { ToDoFormProps } from "../../types";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
/**
 * React Component - Rendering a Form for Creating New Tasks
 * Can be used as a standalone component, as well as a child component
 * @param parentId ID of the parent task for creating child tasks *Not Required
 * @param handlerUpdate Callback - Data update function.
 */
const ToDoForm : React.FC<ToDoFormProps> = ( props : ToDoFormProps ) => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");

  const HandlerSaveTask = () => {
    TaskService.upload(
      {
        title: title, 
        description: description,
        status: 0,
        parentId: props.parentId
      }, props.handlerUpdate
    )
  }

  return (
    <>
      <div className="to_do_form">
        <Box
          component="form"
          sx={{display: "flex", justifyContent: "center" }}
          noValidate
          autoComplete="off"
        >
          <Stack spacing={3} direction="row">
            <TextField
              id="standard-basic"
              label="Title"
              variant="standard"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(event.target.value)
              }} 
              value={title}
            />
            <TextField
              id="standard-basic"
              label="Description"
              variant="standard"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setDesc(event.target.value)
              }}  
              value={description}
            />
            <Button
              variant="outlined"
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                event.preventDefault();
                HandlerSaveTask();
                setTitle("");
                setDesc("");
              }}
            >
              Create
            </Button>
          </Stack>
        </Box>
      </div>
    </>
  )
}

export { ToDoForm }