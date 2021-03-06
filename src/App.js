import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons:[
      {name:'Max', age: 28},
      {name: 'Manu', age:29},
      {name: 'Saurabh', age:26}
    ],
    otherState: 'Some other value',
    showPerson:false
  }
  switchNameHandler = (newName) => {
    this.setState({ persons: [
      {name: newName, age: 28},
      {name: 'Manu', age:29},
      {name: 'Saurabh', age:25}
    ]

    })
  }
  nameChangedHandler = (event) => {
    this.setState({ persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age:29},
      {name: 'Saurabh', age:25}
    ]

    })
  }
   togglePersonsHandler = () => {
      const doesShow = this.state.showPerson;
      this.setState({showPerson: !doesShow});
   }  
  render()
  {  const style ={
    backgroundColor: 'white',
    font: 'inherit',
    border: '1x solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let persons = null;
     if(this.state.showPerson){
       persons = (
        <div>
        <Person name ={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name ={this.state.persons[1].name} age={this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this , 'MAX')} 
        changed={this.nameChangedHandler}>My Hobbies: Racing </Person>
        <Person name ={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>

       );
       
     }
    return (
<div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really Working</p>
      <button 
      style={style}
      onClick={this.togglePersonsHandler}>Toggle Name</button>
      {persons}
  </div>
    );
  }
}

export default App;