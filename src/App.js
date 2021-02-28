import React from "react";
import Search from './components/Search/Search';
import TabPanel from './components/TabPanel/TabPanel';
import axios from 'axios';
import './App.css';

const API_KEY = '4b3661482cb92bceef34c9c6a397e473'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayResults: [],
      searchValue: '',
      searchType: 'multi',
    };
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSearchType = this.handleSearchType.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({searchValue: event.target.value});
  }

  handleSearchType(event, value) {
    if (value === null) {
      // if user does not select a search type, value will be set to searchType ('multi')
      value = this.state.searchType;
    } else {
      this.setState({searchType: value.title})
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.get(`https://api.themoviedb.org/3/search/${this.state.searchType}?api_key=${API_KEY}&query=${this.state.searchValue}`)
    .then(res => {
      this.setState({ displayResults: res.data.results })
    })
  }

  render() {
    return (
      <div>
          <h1 className="app-title">React Movies App</h1>
          <Search 
            handleChange={this.handleChange} 
            handleSearchType={this.handleSearchType} 
            handleSubmit={this.handleSubmit} />
          <TabPanel displayResults={this.state.displayResults} searchValue={this.state.searchValue} />
      </div>
    );
  }
}

