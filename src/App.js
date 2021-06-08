/* eslint-disable no-labels */
import './App.css';
import TodoList from './components/todoList';
import TodoInput from './components/todoInput';
import React, {Component} from 'react';
import CategorieList from './components/categorieList';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      task: [],
      uuidCategorie:'',
      data:''
    }
  }

  handleEdit = (e)=> {
    e.preventDefault();
    console.log("Edited")

  }
  handleDelete = (e)=> {
    e.preventDefault();
    console.log("Deleted")
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Added")
  }

  handleChange = (e)=>{
    e.preventDefault();
    console.log("Changed")
  }

  handleChangeCategorie = (e) => {
    console.log("changed")
  }

  handleCallback = (childData) => {
    this.setState({data: childData})
  }

  handleArchive = (e) => {

  }

  render() {
    return (
      <div className="container bg-transparent overflow-auto">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center text-white">
              To Do List
            </h3>
            <CategorieList parentCallback = {this.handleCallback}></CategorieList>
            <TodoInput 
              task={this.state.task}
              handleEdit={this.handleEdit}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              categoryID={this.state.data}
            />
            <TodoList
              task={this.state.task}
              handleEdit={this.handleEdit}
              handleSubmit={this.handleSubmit}
              categoryID={this.state.data}
              handleArchive={this.handleArchive}
            />
          </div> 
        </div>
      </div>
    );
}
}