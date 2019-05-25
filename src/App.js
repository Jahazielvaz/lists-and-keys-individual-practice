import React, { Component } from 'react';
import './App.css';
import Users from './components/Users';
import store from './store';

class App extends Component{


  render(){

    return (
      <div className="App">
        <h1>Here's the list of users we have</h1>
        <section>
          {
            store.getState().users.map((user) => {
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
