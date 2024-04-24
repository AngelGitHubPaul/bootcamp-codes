import React, { useState } from 'react';

const UpdateProfile = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [message, setMessage] = useState('');
  
  const handleUpdateProfile = async () => {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    try {
      const response = await fetch('/api/updateProfile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          mobileNo: mobileNo
        })
      });
      const data = await response.json();
      
      if (response.ok) {
        setMessage(data.message);
        setFirstName('');
        setLastName('');
        setMobileNo('');
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage('An error occurred while updating profile');
    }
  };


  return (
    <div>
      <h2>Update Profile</h2>
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="mobileNo">Mobile Number:</label>
        <input
          type="text"
          className="form-control"
          id="mobileNo"
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
        />
      </div>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <button className="btn btn-primary" onClick={handleUpdateProfile}>
        Update
      </button>
    </div>
  );
};

export default UpdateProfile;
