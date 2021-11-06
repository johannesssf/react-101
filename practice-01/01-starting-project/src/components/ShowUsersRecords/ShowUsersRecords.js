import React from "react";

const ShowUsersRecords = (props) => {
  return (
    <div className="card">
      {props.users.map((user) => (
        <div key={user.id} className="card-item">
          <input
            type="text"
            readOnly
            value={user.username + " (" + user.age + " years old)"}
          />
        </div>
      ))}
    </div>
  );
};

export default ShowUsersRecords;
