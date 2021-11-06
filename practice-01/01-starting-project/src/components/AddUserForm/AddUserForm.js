import React from "react";


const NewRecordForm = (props) => {

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredUsername = event.target.username.value
    const enteredAge = event.target.age.value
    console.log(enteredUsername, enteredAge);
    if (enteredUsername.length === 0 || enteredAge.length === 0) {
      console.log("Please enter a valid name and age (non-empty values).");
    }
    else if (enteredAge <= 0) {
      console.log("Please enter a valid age (> 0).")
    }
    else {
      props.addUser({
        id: Math.random(),
        username: enteredUsername,
        age: enteredAge
      })
    }
  };

  return (
    <div className="card">
      <div>
        <form onSubmit={formSubmitHandler}>
          <label>Username</label>
          <br />
          <input name="username" type="text" />
          <br />
          <label>Age (Years)</label>
          <br />
          <input name="age" type="number" />
          <br />
          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default NewRecordForm;
