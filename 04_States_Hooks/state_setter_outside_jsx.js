import React, { useState } from 'react';

export default function EmailTextInput() {
// declare current state and state setter 
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    const updatedEmail = event.target.value;
    setEmail(updatedEmail);
  }

  return (
    <input value={email} onChange={handleChange} />
  );
}

export default function PhoneNumber() {
    // declare current state and state setter 
    const [phone, setPhone] = useState('');
    const handleChange = (target)=> {
      const newPhone = target.value;
      const isValid = validPhoneNumber.test(newPhone);
      if (isValid) {
          setPhone(newPhone);
      }
    };
  
    return (
      <div className='phone'>
        <label for='phone-input'>Phone: </label>
        <input value={phone} onChange={handleChange} id='phone-input' />
      </div>
    );
  }