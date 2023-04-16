import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { ToDoList } from './components/ToDoList';
import { Task } from './types';
import "./components/ToDoList/ToDoList.css";

const App : React.FC = () => {
  const [data, setData] = useState<Task[]>([]);

  useEffect(() => {
    UpdateData();
  }, [])

  const UpdateData = () => {
    fetch("/tasks")
    .then(res => res.json())
    .then(res => setData(res));
  }

  console.log(data)

  return (
    <>
      <ToDoList
        dataList={data}
        handlerUpdate={UpdateData}
      />
    </>
  )
}

export default App;
