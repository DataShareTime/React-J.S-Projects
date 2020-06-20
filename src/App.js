import React, { Component } from 'react'
import "../styles/main.css"
import Sport from './components/sport'
import data from './components/data'

export default class App extends Component {
  state = {
    query: "",
  }
  searchText = (event)=>{
    //console.log(event.target.value);
    this.setState({
      query: event.target.value
    })
  }
  render() {

    let name = [];
    let year  = [];

    Object.keys(data).forEach(key =>{
      name.push(data[key].title);
      year.push(data[key].year);
    })

    let newName = name.filter((sport)=>{
      return sport.toLowerCase().indexOf(this.state.query) !== -1;
    })
   // console.log(name);
   // console.log(year);
    return (
      <div className="container">
      <div className="input-container">
        <label>Search for a Sports Game</label>
        <input type="text" onKeyUp={this.searchText} placeholder="Search..."/>
      </div>
      <div className="sports-container">
        {
          newName.map((sport,i)=>{
            return  <Sport name={sport} title={name[i]} year={year[i]} key={i} />
          })
        }        
      </div>
      </div>
    )
  }
}
