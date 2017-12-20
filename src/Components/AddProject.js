import React, { Component } from 'react';

class AddProject extends Component {
    constructor(){
        super();
        this.state = {
            newProject:{}
        }
    }

    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'Mobile Development']
    }

    handleSubmit(e){
        if(this.refs.name.value === ''){
            alert('name is required');
        }else {
            this.setState({newProject:{
                name: this.refs.name.value,
                category: this.refs.category.value
            }}, function(){
                // console.log(this.state);
                this.props.addProject(this.state.newProject);
            });

        }
        e.preventDefault();
    }
    render() {
    let categoryOptions = this.props.categories.map(category => {
        return <option key={category} value={category}>{category}</option>
    });
        return (
            <div>
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>name</label><br/>
                        <input type="text" ref={"name"}/>
                    </div>
                    <div>
                        <label>Category</label><br/>
                        <select ref="category">
                            {categoryOptions}

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

export default AddProject;
