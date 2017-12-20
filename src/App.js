import React, { Component } from 'react';
import Projects from './Components/Projects';
import Todos from './Components/Todos';
import uuid from 'uuid';
import $ from 'jquery';
import AddProject from './Components/AddProject';
import AddTodo from './Components/AddTodo';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {

      todos: [],
      editStatus: false,
      currentIndex: ''
    }
  }

  
  getTodos(){
    // $.ajax({
    //     url: 'https://jsonplaceholder.typicode.com/todos',
    //     dataType: 'json',
    //     cache: false,
    //     success: function() {
    //         this.setState({todos: data}, function(){
    //             console.log(this.state);
    //         });
    //     }.bind(this),
    //     error: function(xhr, status, err){
    //         console.log(err);
    //     }
    //     }
    // });

    axios.get('api/users/1/todos');
    var todos = [
        {
            userId: 1,
            id: 1,
            title: 'todo 1',
            completed: false
        },
        {
            userId: 1,
            id: 2,
            title: 'todo 2',
            completed: false
        },
        {
            userId: 1,
            id: 3,
            title: 'todo 3',
            completed: false
        },
        {
            userId: 1,
            id: 4,
            title: 'todo 4',
            completed: true
        },
    ];

      this.setState({todos: todos});
  }

  // componentWillMount(){
  //   this.getTodos();
  // }

  componentDidMount(){
    this.getTodos();
  }

  handleAddTodo(todo){
    let todos = this.state.todos;
    todos.push(todo);
    this.setState({todos: todos});
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
    
  }

  handleDeleteTodo(id){
      let todos = this.state.todos;
      let index = todos.findIndex(x => x.id === id);
      todos.splice(index, 1);
      // this.setState({todos: todos});
  }

  render() {
    return (
      <div className="App">
        {/*<AddProject addProject = {this.handleAddProject.bind(this)}/>*/}
        {/*<Projects projects = {this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>*/}
        <Todos todos = {this.state.todos} onDelete={this.handleDeleteTodo.bind(this)} onEdit={this.handleEditTodo.bind(this)}/>
        <AddTodo addTodo = {this.handleAddTodo.bind(this)} editStatus = {this.state.editStatus} currentTodo = {this.state.todos[this.state.currentIndex]} editTodo = {this.handleSaveEditTodo.bind(this)}/>
      </div>
    );
  }
}



export default App;
