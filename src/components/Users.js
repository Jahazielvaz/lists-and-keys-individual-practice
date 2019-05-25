import React from 'react';

const Users = (props) => {
  return(
    <div>
      <h2>username: <span>{props.username}</span>, name: <span>{props.name}</span>, lastname: <span>{props.last}</span></h2>
      <button onClick={props.buttonDelete}>Delete</button>
    </div>
  )
}

export default Users;
