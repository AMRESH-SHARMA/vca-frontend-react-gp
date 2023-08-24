import axios from "axios";
import React, { useState, useEffect } from "react";
import "./configCar.scss";

const ConfigCar = () => {

  const [options, setOptions] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Fetch options data from the API
    axios.get("YOUR_API_URL_HERE")
      .then(response => {
        setOptions(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleOptionChange = (optionId, setSelectedOption) => {
    return (event) => {
      const newSelectedValue = event.target.value;
      setSelectedOption(newSelectedValue);

      const selectedOptions = [selectedOption1, selectedOption2, selectedOption3];
      const total = selectedOptions.reduce((sum, option) => {
        const selectedOption = options.find((opt) => opt.id.toString() === option);
        return sum + (selectedOption ? selectedOption.price : 0);
      }, 0);

      setTotalPrice(total);
    };
  };

  const selectedOptionsWithPrices = [
    selectedOption1, selectedOption2, selectedOption3
  ].map(option => {
    const selectedOption = options.find(opt => opt.id.toString() === option);
    return selectedOption ? (
      <div key={selectedOption.id} className="selected-option">
        <p>{selectedOption.label}: ${selectedOption.price}</p>
      </div>
    ) : null;
  });


  return (<>
    <div className="customize-container">

      <h1>Select Parts Which You Want To Customize</h1>


      <div className="dropdown">
        <label className="label">Standard:</label>
        <select
          value={selectedOption1 || ""}
          onChange={handleOptionChange(1, setSelectedOption1)}
        >
          <option value="">Standard</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <br />

      <div className="dropdown">
        <label className="label">Interior:</label>
        <select
          value={selectedOption2 || ""}
          onChange={handleOptionChange(2, setSelectedOption2)}
        >
          <option value="">Interior</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <br />

      <div className="dropdown">
        <label className="label">Exterior:</label>
        <select
          value={selectedOption3 || ""}
          onChange={handleOptionChange(3, setSelectedOption3)}
        >
          <option value="">Exterior</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <br />


      <div className="total-price">
        <h2>Selected Components:</h2>
        {selectedOptionsWithPrices}
        <p>Total Cart Value: ${totalPrice}</p>
        <button className="confirm-button">Confirm Order</button>
      </div>
    </div>
  </>
  )
}

export default ConfigCar