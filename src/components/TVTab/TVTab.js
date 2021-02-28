import React from 'react';
import DisplayList from '../TabPanel/DisplayList';
import TVCategories from './TVCategories';
import axios from 'axios';

const API_KEY = '4b3661482cb92bceef34c9c6a397e473'

export default class TVTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayResults: [],
    };

    this.handleCategorySelection = this.handleCategorySelection.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCategorySelection(event, value) {
        let newVal = value.title;
        this.handleSubmit(newVal); 
    }

  handleSubmit(newVal) {
    axios.get(`https://api.themoviedb.org/3/tv/${newVal}?api_key=${API_KEY}&language=en-US&page=1`)
    .then(res => {
        this.setState({ displayResults: res.data.results })
    })
  }

  render() {
    return (
        <div>
            <TVCategories handleCategorySelection={this.handleCategorySelection} />
            <DisplayList displayResults={this.state.displayResults} />
        </div>
    );
  }
}