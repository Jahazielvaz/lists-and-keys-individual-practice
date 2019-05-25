import React, { Component } from 'react';
import './App.css';
import Users from './components/Users';

class App extends Component{
  state = {
    users : [
      {id: '1', username: 'Charlies3000', name: 'Charlie', last: 'Verdas'},
      {id: '2', username: 'falcon69', name: 'Verdis', last: 'Pauli'},
      {id: '3', username: 'TremorsIAm', name: 'Sheila', last: 'Yukino'},
      {id: '4', username: 'ChangoFeliz', name: 'Jahaziel', last: 'Vazquez'}
    ]
  }

  render(){

    return (
      <div className="App">
        <h1>Here's the list of users we have</h1>
        <section>
          {
            this.state.users.map((user) => {
              return(
                <Users key={user.id} username={user.username} name={user.name} last={user.name}></Users>
              )
            })
          }
        </section>
      </div>
    );
  }
}

export default App;
