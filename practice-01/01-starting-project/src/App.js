import React, { useState } from 'react';
import ShowUsersRecords from './components/ShowUsersRecords/ShowUsersRecords';
import AddUserForm from './components/AddUserForm/AddUserForm'

import "./index.css"


function App() {
  const [users, setUsers] = useState([])

  const addUserHandler = (newUser) => {
    console.log(newUser);
    setUsers([newUser, ...users]);
  };

  return (
    <div>
      <AddUserForm addUser={addUserHandler} />
      <ShowUsersRecords users={users} />
    </div>
  );
}

export default App;
