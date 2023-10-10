import React, { useState } from "react";
const EditUsernameForm = ({ initialUsername, onUpdateUsername }) => {
    const [username, setUsername] = useState(initialUsername);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onUpdateUsername(username);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Update Name</button>
      </form>
    );
  };

export default EditUsernameForm;