import React, { useState } from "react";

function SchoolAdminForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    address: "",
    homeroomClass: "",
    studentId: "",
    favoriteLunch: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure the name and value from the event target
    setFormData((prevData) => ({
      ...prevData,                    // Spread the previous data
      [name]: value                   // Update the value of the name property
    }));
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      <h1>Student Information Form</h1>
      <form>
        <div style={{ marginBottom: 10 }}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={{ marginLeft: 10, padding: 5, width: '100%' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={{ marginLeft: 10, padding: 5, width: '100%' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              style={{ marginLeft: 10, padding: 5, width: '100%' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              style={{ marginLeft: 10, padding: 5, width: '100%' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>
            Homeroom Class Number:
            <input
              type="text"
              name="homeroomClass"
              value={formData.homeroomClass}
              onChange={handleChange}
              style={{ marginLeft: 10, padding: 5, width: '100%' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>
            Student ID:
            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              style={{ marginLeft: 10, padding: 5, width: '100%' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>
            Favorite Lunch Option:
            <div>
              <label>
                <input
                  type="radio"
                  name="favoriteLunch"
                  value="Pizza"
                  checked={formData.favoriteLunch === "Pizza"}
                  onChange={handleChange}
                  style={{ marginRight: 5 }}
                />
                Pizza
              </label>
              <label style={{ marginLeft: 20 }}>
                <input
                  type="radio"
                  name="favoriteLunch"
                  value="Sandwich"
                  checked={formData.favoriteLunch === "Sandwich"}
                  onChange={handleChange}
                  style={{ marginRight: 5 }}
                />
                Sandwich
              </label>
              <label style={{ marginLeft: 20 }}>
                <input
                  type="radio"
                  name="favoriteLunch"
                  value="Salad"
                  checked={formData.favoriteLunch === "Salad"}
                  onChange={handleChange}
                  style={{ marginRight: 5 }}
                />
                Salad
              </label>
            </div>
          </label>
        </div>
      </form>
      <h2>Entered Data:</h2>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Age: {formData.age}</p>
      <p>Address: {formData.address}</p>
      <p>Homeroom Class Number: {formData.homeroomClass}</p>
      <p>Student ID: {formData.studentId}</p>
      <p>Favorite Lunch Option: {formData.favoriteLunch}</p>
    </div>
  );
}

export default SchoolAdminForm;
