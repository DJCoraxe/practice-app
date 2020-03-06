import React from 'react';
import './App.css';
import BaseballCard from './BaseballCard';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
  

  componentDidMount(){
    fetch("https://uinames.com/api/?amount=25")
      .then(response => response.json())
      .then(result => {
        this.setState({data: result})
      })
  }

  render(){
    return (
      <div className="App">
        <div className="people-list">
          {this.state.data.map((person,i)=>(
            <BaseballCard name={person.name} gender={person.gender} region={person.region} key={i}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
