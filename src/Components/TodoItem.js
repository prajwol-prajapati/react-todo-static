import React, { Component } from 'react';



class TodoItem extends Component {
    deleteTodo(id){
        this.props.onDelete(id);
    }
    editTodo(id){
        this.props.onEdit(id);
    }
    render() {
        return (
            <li className="Todo">
                <strong>{this.props.todo.id}</strong>: {this.props.todo.name} 
                <a className="pull-right delete-button" href="#" onClick={this.deleteTodo.bind(this, this.props.todo.id )}>delete x</a>
                <a className="pull-right edit-button" href="#" onClick={this.editTodo.bind(this, this.props.todo.id )}>edit</a>
            </li>
        );
    }
}
// ProjectItem.propTypes = {
//     project: React.PropTypes.object,
//     onDelete: React.PropTypes.func
// }
export default TodoItem;
