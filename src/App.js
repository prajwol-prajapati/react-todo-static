import React, { Component } from 'react';
import Todos from './Components/Todos';
import uuid from 'uuid';
import $ from 'jquery';
import AddTodo from './Components/AddTodo';
import Search from './Components/Search';
import './App.css';
import axiosService from './Services/axiosService';

class App extends Component {
  constructor(){
    super();
    this.state = {

      todos: [],
      editStatus: false,
      currentIndex: ''
    }

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  
  getTodos(){
    
    axiosService.get('todos')
    .then(
      (value) => {
        
        this.setState({
          todos: value.data.data
        });
      }
    );
  }

  componentDidMount(){
    this.getTodos();
  }

  handleAddTodo(todo){
    let todos = this.state.todos;
    todos.push(todo);
    this.setState({todos: todos});

    axiosService.post('todos', {
      name: todo.name,
      done: todo.completed
    }).then(() =>{
      this.getTodos();
    });
  }

  handleEditTodo(id){
    let todos = this.state.todos;
    let index = todos.findIndex(x => x.id === id);
    this.setState({currentIndex: index, editStatus: true});

    console.log(this.state.currentIndex);



  }

  handleSaveEditTodo(todo){
    let todos = this.state.todos;
    let id = todo.id;
    console.log(id);
    let index = todos.findIndex(x => x.id === id);
    let currentTodo = this.state.todos[index];
    console.log(currentTodo);
    currentTodo.title = todo.title;
    currentTodo.completed = todo.completed;
    
    axiosService.put('todos/' + id, {
      name: todo.name,
      done: todo.completed
    }).then(() =>{
      this.getTodos();
    });
  }

  handleDeleteTodo(id){
      let todos = this.state.todos;
      let index = todos.findIndex(x => x.id === id);
      todos.splice(index, 1);
      axiosService.delete('todos/' + id).then(() =>{
      this.getTodos();
    });
      // this.setState({todos: todos});
  }
    handleSearch(key) {
            axiosService.get('todos/search', {
                params: {
                    key: key
                }
            }).then((value) => {
                console.log('value', value);
                this.setState({
                    todos: value.data.data
                })
            });
                
        }

  render() {
    return (
      <div className="App">
        {/*<AddProject addProject = {this.handleAddProject.bind(this)}/>*/}
        {/*<Projects projects = {this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>*/}
        <Search search = {this.handleSearch} />
        <Todos todos = {this.state.todos} onDelete={this.handleDeleteTodo.bind(this)} onEdit={this.handleEditTodo.bind(this)}/>
        <AddTodo addTodo = {this.handleAddTodo} editStatus = {this.state.editStatus} currentTodo = {this.state.todos[this.state.currentIndex]} editTodo = {this.handleSaveEditTodo.bind(this)} />
      </div>
    );
  }
}



export default App;
