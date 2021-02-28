import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import './Search.css';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOptions: [
        {title: 'movie'},
        {title: 'multi'},
        {title: 'tv'},
      ]
    };
  }

  render() {    
    return (
      <form className="search-form">
        <TextField 
            id="search-bar" 
            label="Search" 
            type="search" 
            variant="outlined" 
            onChange={this.props.handleChange}/>  
      
        <div className="search-type-grid">
          <Autocomplete
              onChange={this.props.handleSearchType}
              id="search-type-box"
              options={this.state.searchOptions}
              getOptionLabel={(option) => option.title}
              style={{ width: 200 }}
              renderInput={(params) => <TextField {...params} label='Search Type' variant="outlined" />}
          />
          <Button style={{maxWidth: '100px', height: '40px'}}onClick={this.props.handleSubmit} variant="contained" color="primary">
            Search
          </Button>
        </div>
       
      </form>

    );
  }
}


