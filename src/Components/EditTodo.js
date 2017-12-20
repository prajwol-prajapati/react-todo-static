import React, { Component } from 'react';
import uuid from 'uuid';

class EditTodo extends Component {
    constructor(){
        super();
        this.state = {
            newTodo:{}
        }
    }

    static defaultProps = {
        completed: ['true', 'false']
    }

    handleSubmit(e){
       this.setState({newTodo:{
                userId: 1,
                id: ,
                title: this.refs.title.value,
                completed: this.refs.completed.value
            }}, function(){
                // console.log(this.state);
                this.props.addTodo(this.state.newTodo);
            });

        }
        e.preventDefault();
    }
    render() {
        let completedOptions = this.props.completed.map(completed => {
            return <option key={completed} value={completed}>{completed}</option>
        });
        return (
            <div className='EditTodo'>
                <h3>Add Todo</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label><br/>
                        <input type="text" ref={"title"}/>
                    </div>

                    <div>
                        <label>Completed</label><br/>
                        <select ref="completed">
                            {completedOptions}

                        </select>
                    </div>
                    <br/>
                    <input type="submit" value="submit"/>
                    <br/>
                </form>
            </div>
        );
    }
}

export default EditTodo;
