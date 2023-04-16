import * as React from "react";
import { useState } from "react";
import { FormProps } from "../../types";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

/**
 * React Component - Rendering a Form for Creating New Tasks
 * Can be used as a standalone component, as well as a child component
 * @param {parentId}: number - ID of the parent task for creating child tasks *Not Required
 * @param {dataList}: TaskList - List of tasks to update data
 * @param {handlerUpdate}: Callback - Data update function.
 */
const ToDoForm : React.FC<FormProps> = ({ parentId, handlerUpdate } : FormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");

  const HandlerSaveTask = () => {
    fetch('/tasks/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title, 
        description: description,
        status: "toDo",
        parentId: parentId
      })
    })
    .then(res => {
      setTitle("");
      setDesc("");
      handlerUpdate();
    });
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