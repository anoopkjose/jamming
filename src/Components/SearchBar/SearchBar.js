import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

// Searchbar component
class SearchBar extends React.Component
{
  // Constructor
  constructor(props)
  {
      super(props);
      this.state = {searchTerm:''};
      this.search = this.search.bind(this);
      this.handleTermChange = this.handleTermChange.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  // Search
  search()
  {
      this.props.onSearch(this.state.searchTerm);
  }

  // Handles search
  handleTermChange(e)
  {
    let searchTerm = e.target.value;
    this.setState({searchTerm:searchTerm});
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
     this.search();
    }}


  // Render
  render()
  {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleTermChange} onKeyPress={this.handleKeyPress}/>
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
};

SearchBar.propTypes = {
                        onSearch: PropTypes.func
                      };
export default SearchBar;
