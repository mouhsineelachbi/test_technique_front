import React, { Component, useState,useEffect,useCallback } from 'react';
import ToDo from './todo';

const TodoList = props => {
  const [tasks, setTasks] = useState([]);
  const [id_cat, setId_cat] = useState('');
  
  useEffect(() => {
    fetch('http://localhost:3001/task/byCategorie/' + id_cat).then(response => response.json()).then(data => {setTasks(data)});
  }, [id_cat]);

    
  const clearList = useCallback(() => {});
  
  const handleChange = (e)=>{
      console.log("changed")
  }
  
  const taskList = tasks.map(task => {
    return <ToDo key={task.id} title={task.title}></ToDo>;
  });
  
  return    <div className="todoList">
                <ul className="list-group my-5">
                    <form onSubmit={handleChange}>
                    <h3 className="text-capitalize text-center text-white">Tasks List</h3>
                    {taskList}
                    <button type="submit" className="btn btn-danger btn-block text-uppercase mt-5" onClick={clearList}>Clear {id_cat}</button>
                    </form>
                </ul>
            </div>;
};

export default TodoList;
