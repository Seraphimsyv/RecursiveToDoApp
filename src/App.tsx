import React from 'react';
import { useState } from 'react';
import './App.css';
import { ToDoList } from './components/ToDoList';
import { Task } from './types';
import "./components/ToDoList/ToDoList.css";
import { TaskManager } from './service/TaskService';

const App : React.FC = () => {
  const [data, setData] = useState<Task[]>(TaskManager.data);
  const [count, setCount] = useState(0);

  const UpdateData = (task: Task) => {
    TaskManager.Upload(task);
    setData(TaskManager.data);
    setCount(count+1);
  }
  const DeleteFromData = (id: number) => {
    TaskManager.Delete(id);
    setData(TaskManager.data);
    setCount(count+1);
  }
  const UpdateTaskMoveUp = (task: Task, parentId?: number) => {
    TaskManager.Move(task, "up", parentId);
    setData(TaskManager.data);
    setCount(count+1);
  }
  const UpdateTaskMoveDown = (task: Task, parentId?: number) => {
    TaskManager.Move(task, "down", parentId);
    setData(TaskManager.data);
    setCount(count+1);
  }

  return (
    <>
      <ToDoList
        dataList={data}
        handlerUpdate={UpdateData}
        handlerDelete={DeleteFromData}
        handlerMoveUp={UpdateTaskMoveUp}
        handlerMoveDown={UpdateTaskMoveDown}
      />
    </>
  )
}

export default App;
