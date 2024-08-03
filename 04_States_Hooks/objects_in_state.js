import React, { useState } from "react";

export default function EditProfile() {
  const [profile, setProfile] = useState({});    //{} cuz we are using object

  const handleChange = ({ target }) => {
    const { name, value } = target; //destructuring the target object to get the name and value properties
    setProfile((prevProfile) => ({  //prevProfile is the previous state of the profile object
      ...prevProfile,               //... the spread operator, to fill in the corresponding fields from our previous state.
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, '', 2));
  };

  return (
  <form onSubmit={handleSubmit}>
      <input
        value={profile.firstName || ''}
        onChange={handleChange}
        name="firstName"
        type="text"
        placeholder="First Name"
      />
      <input
        value={profile.lastName || ''}
        onChange={handleChange}
        type="text"
        name="lastName"
        placeholder="Last Name"
      />
      <input
        value={profile.bday || ''}
        onChange={handleChange}
        type="date"
        name="bday"
      />
      <input
        value={profile.password || ''}
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="Password"
      />
      <button type="submit">Save Profile</button>
    </form>
    
  );
}
