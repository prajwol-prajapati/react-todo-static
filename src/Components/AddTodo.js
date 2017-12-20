import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(){
        super();
        this.state = {
            newTodo:{},
            editTodo: false,
            editName: ''
        }
       
        
        this.handleChange = this.handleChange.bind(this);
    }

    static defaultProps = {
        completed: ['true', 'false']
    }

    // makeEdit(){
    //     if(this.props.editStatus){
    //         this.setState({ editTodo: true });
    //     }
    // }
    handleSubmit(e){
        if(this.refs.name.value === ''){
            alert('name is required');
        }else {
            this.setState({newTodo:{
                name: this.refs.name.value,
                completed: this.refs.completed.value
            }}, function(){
                console.log(this.state.newTodo);
                this.props.addTodo(this.state.newTodo);
            });

        }
        e.preventDefault();
    }

    handleEdit(e){
        if(this.refs.name.value === ''){
            alert('name is required');
        }else {
            this.setState({newTodo:{
                userId: 1,
                id: this.props.currentTodo.id,
                name: this.refs.name.value,
                completed: this.refs.completed.value,
            }}, function(){
                // console.log(this.state);
                this.props.editTodo(this.state.newTodo);
            });

        }
        e.preventDefault();
    }
    handleChange(){
        this.setState({editName: this.refs.name.value});
        
    }
    
    render() {
        let completedOptions = this.props.completed.map(completed => {
            return <option key={completed} value={completed}>{completed}</option>
        });
        let submitOption = this.handleSubmit.bind(this);
        let todoname = '';
        let completed = 'false';
        let editStatus = this.props.editStatus;
        if(editStatus){
            
            console.log(this.props.currentTodo.name);
            if(this.state.editTodo){
                this.setState({ 
                    editName: this.props.currentTodo.name,
                    editTodo: false
                });
            }
            completed = this.props.currentTodo.completed;
            submitOption = this.handleEdit.bind(this);
            
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
                        <label>name</label><br/>
                        <input type="text" ref={"name"}  id="todoname" value={this.state.editName} onChange = {this.handleChange}/>
                    </div>

                    <div>
                        <label>Completed</label><br/>
                        <select ref="completed"  id="todoCompleted" value={completed} >
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
