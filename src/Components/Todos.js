import React, { Component } from 'react';
import TodoItem from './TodoItem';



class Todos extends Component {
    deleteTodo(id){
        this.props.onDelete(id);
    }
    editTodo(id){
        this.props.onEdit(id);
    }
    render() {
        let todoItems;
        if(this.props.todos){
            todoItems = this.props.todos.map(todo => {
                return (

                    <TodoItem onDelete={this.deleteTodo.bind(this)} key={todo.id} todo={todo} onEdit={this.editTodo.bind(this)}/>
                );
            });

        }
        return (
            <div className="Todos">
                <h3>Todos</h3>
                {todoItems}
            </div>
        );
    }
}

// console.log(React.PropTypes);


export default Todos;
