import React, { Component } from 'react';



class ProjectItem extends Component {
    deleteProject(id){
        this.props.onDelete(id);
    }
    render() {
        return (
            <li className="Project">

                <strong>{this.props.project.id}</strong>: {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id )}>x</a>
            </li>
        );
    }
}
// ProjectItem.propTypes = {
//     project: React.PropTypes.object,
//     onDelete: React.PropTypes.func
// }
export default ProjectItem;
