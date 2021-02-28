import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default class TVCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedCategory: [
            { title: 'airing_today' },
            { title: 'on_the_air' },
            { title: 'popular' },
            { title: 'top_rated' }
        ]
  }
}

  render() { 
    return (
            <Autocomplete
            onChange={this.props.handleCategorySelection}
            id="tv-category"
            options={this.state.selectedCategory}
            getOptionLabel={(option) => option.title}
            style={{marginLeft: 'auto', marginRight: 'auto', width: 200, marginTop: '30px', marginBottom: '50px' }}
            renderInput={(params) => <TextField {...params} label="Category" variant="outlined" />}
        />
    );
  }
}



