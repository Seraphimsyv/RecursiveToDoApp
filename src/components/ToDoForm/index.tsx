import * as React from "react";
import { useState } from "react";
import { FormProps } from "../../types";
import { filterData } from "../../utils/filterData";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

/**
 * React Component - Отрисовка формы для создания новых задач
 * Может использоватся как самостоятельный компонент, а также как дочерний
 * @param {parentId} : number - Id родительской задачи для создания задач потомков *NotRequired
 * @param {dataList} : TaskList - Список задач для обновления данных
 * @param {dataUpdate} : Function - Обновление данных
 */
const ToDoForm : React.FC<FormProps> = ({ parentId, dataList, dataUpdate } : FormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [error, setError] = useState({});

  const HandlerSaveTask = () => {
    if (Object.keys(error).length > 0) {
      return;
    }

    if (title.length === 0) {
      return setError({type: "title", msg: ""});
    }

    if (description.length === 0) {
      return setError({type: "description", msg: ""});
    }

    if (parentId !== undefined) {
      dataList.push(
        {
          id: Math.floor(Math.random() * 100),
          title: title, 
          description: description,
          status: 'toDo',
          parentId: parentId,
          index: filterData(dataList, parentId).length
        }
      );
      dataUpdate(dataList);
    } else {
      dataList.push(
        {
          id: Math.floor(Math.random() * 100),
          title: title, 
          description: description,
          status: 'toDo'
        }
      );
      dataUpdate(dataList);
    }
    setTitle("");
    setDesc("");
  }

  return (
    <>
      <div className="to_do_form">
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
            display: "flex",
            justifyContent: "center"
          }}
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