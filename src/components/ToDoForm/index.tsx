import * as React from "react";
import { useState } from "react";
import { Task, FormProps } from "../../types";
import { filterData } from "../../utils/filterData";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

/**
 * React Component - Rendering a Form for Creating New Tasks
 * Can be used as a standalone component, as well as a child component
 * @param {parentId}: number - ID of the parent task for creating child tasks *Not Required
 * @param {dataList}: TaskList - List of tasks to update data
 * @param {dataUpdate}: Function - Data update function.
 */
const ToDoForm : React.FC<FormProps> = ({ parentId, dataList, dataUpdate } : FormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");

  const SaveTask = (task: Task) => {
    dataList.push(task);
    dataUpdate(dataList);
  }
  const HandlerSaveTask = () => {
    if (parentId !== undefined) {
      SaveTask({
        id: Math.floor(Math.random() * 100),
        title: title, 
        description: description,
        status: 'toDo',
        parentId: parentId,
        index: filterData(dataList, parentId).length
      });
    } else {
      SaveTask({
        id: Math.floor(Math.random() * 100),
        title: title, 
        description: description,
        status: 'toDo'
      });
    }
    setTitle("");
    setDesc("");
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