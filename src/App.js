import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '',
      title: ''
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()
    .then(users => this.setState({monsters: users}))
    )
}

  handleChange = (e) => {
    this.setState({searchField: e.target.value, title: e.target.value})
  }

  render(){
    const { monsters, searchField } = this.state
    const filterMonsters = monsters.filter(monsters =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())  
      )

    return (

      <div className="App">
        <h1>M o n s t e r s  -  R o l o d e x</h1>
        <SearchBox 
        placeholder='Search Monsters'
        handleChange= {this.handleChange}
        />
        <CardList monsters ={filterMonsters}/>

      </div>
    );
  }
}

export default App;
