import React from 'react';
import './App.css';
import { dataTask } from './data/tasks';
import { ToDoList } from './components/ToDoList';
import "./components/ToDoList/ToDoList.css";

const App : React.FC = () => {

  return (
    <>
      <ToDoList dataList={dataTask} />
    </>
  )
}

export default App;
