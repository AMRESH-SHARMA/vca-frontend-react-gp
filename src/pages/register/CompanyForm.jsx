import React, { useState } from "react";
import "./CompanyForm.css"; // Import your CSS file

function CompanyForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    addressLine1: "",
    addressLine2: "",
    streetNumber: "",
    city: "",
    state: "",
    pincode: "",
    telephone: "",
    fax: "",
    authorizedPersonName: "",
    gstNumber: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // You can perform data submission here
  };

  return (
    <div className="company-form">
      <h1>Company Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Address Line 1</label>
          <input
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Address Line 2</label>
          <input
            type="text"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Street Number</label>
          <input
            type="text"
            name="streetNumber"
            value={formData.streetNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Pincode</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Telephone</label>
          <input
            type="text"
            name="telephone"
            value={formData.telephone}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Fax</label>
          <input
            type="text"
            name="fax"
            value={formData.fax}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Authorized Person Name</label>
          <input
            type="text"
            name="authorizedPersonName"
            value={formData.authorizedPersonName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>GST Number</label>
          <input
            type="text"
            name="gstNumber"
            value={formData.gstNumber}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CompanyForm;
