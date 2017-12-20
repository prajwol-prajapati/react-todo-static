import React from 'react';


class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKey: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchKey: e.target.value
    }, () => this.props.search(this.state.searchKey))
  }

  render() {
    return(
      <input 
        type='text' 
        placeholder="Search for todos...."
        value = {this.state.searchKey}
        onChange = {this.handleChange}
        className = 'search-box'
        />
    );
  }
}

export default Search;