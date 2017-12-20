import React, { Component } from 'react';
import uuid from 'uuid';

class AddTodo extends Component {
    constructor(){
        super();
        this.state = {
            newTodo:{},
            editTodo: false
        }
    }

    static defaultProps = {
        completed: ['true', 'false']
    }

    handleSubmit(e){
        if(this.refs.title.value === ''){
            alert('Title is required');
        }else {
            this.setState({newTodo:{
                userId: 1,
                id: uuid.v4(),
                title: this.refs.title.value,
                completed: this.refs.completed.value
            }}, function(){
                // console.log(this.state);
                this.props.addTodo(this.state.newTodo);
            });

        }
        e.preventDefault();
    }

    handleChange(e){
        if(this.refs.title.value === ''){
            alert('Title is required');
        }else {
            this.setState({newTodo:{
                userId: 1,
                id: this.props.currentTodo.id,
                title: this.refs.title.value,
                completed: this.refs.completed.value
            }}, function(){
                // console.log(this.state);
                this.props.editTodo(this.state.newTodo);
            });

        }
        e.preventDefault();
    }
    backButton(){
        document.getElementById('todoTitle').value = "";
        // document.getElementById('todoDesc').value = "";
        document.getElementById('submitButton').style.display = 'block';
        document.getElementById('backButton').style.display = 'none';
        this.setState({
          editTodo: false
        });
      }
    render() {
        let completedOptions = this.props.completed.map(completed => {
            return <option key={completed} value={completed}>{completed}</option>
        });
        let submitOption = this.handleSubmit.bind(this);
        let todoTitle = '';
        let completed = 'false';
        let editStatus = this.props.editStatus;
        if(editStatus){
            console.log(this.props.currentTodo.title);
            todoTitle = this.props.currentTodo.title;
            completed = this.props.currentTodo.completed;
            submitOption = this.handleChange.bind(this);
        }

        // let submitButton = <input type="submit" value="Add"/>;
        // if(editStatus){
        // submitButton = <input type="submit" value="save"/>  <button> back </button>;
        //  }
        return (
            <div className='AddTodo'>
                <h3>Add Todo</h3>
                <form onSubmit={submitOption}>
                    <div>
                        <label>Title</label><br/>
                        <input type="text" ref={"title"} value={todoTitle} id="todoTitle"/>
                    </div>

                    <div>
                        <label>Completed</label><br/>
                        <select ref="completed" value={completed}  id="todoCompleted">
                            {completedOptions}

                        </select>
                    </div>
                    <br/>
                    
                    <button type="submit" id="submitButton">Add todo</button>
                    
                    
                    <br/>
                </form>
            </div>
        );
    }
}

export default AddTodo;
