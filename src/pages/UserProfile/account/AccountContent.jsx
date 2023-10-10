import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUsernameAsync } from '../../../Features/auth/authActions'; 
import Account from './Account';
import { selectUserName } from '../../../Features/auth/authSlice'; 

const AccountContent = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName); 
  console.log(username);
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(username || "");

  const handleEditName = () => {
    setIsEditing(true);
  };

  const handleSaveName = async () => {
    dispatch(updateUsernameAsync(newUsername));
    setIsEditing(false);
    console.log(newUsername)
  };

  const handleChangeName = (event) => {
    setNewUsername(event.target.value);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {isEditing ? (
            <>
              <input 
                type="text"
                value={newUsername}
                onChange={handleChangeName}
              />
              <button className="edit-button" onClick={handleSaveName}>
                Save Name
              </button>
            </>
          ) : (
            <>
              {username || 'User'} 
              <button className="edit-button" onClick={handleEditName}>
                Edit Name
              </button>
            </>
          )}
        </h1>
        
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  );
};

export default AccountContent;
