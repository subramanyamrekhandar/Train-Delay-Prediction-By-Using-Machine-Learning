import React, { useState } from "react";

const Form = ({ onPredict }) => {
  const [formData, setFormData] = useState({
    year: "",
    month: "",
    date: "",
    selectAirline: "",
    fromStation: "",
    toStation: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPredict(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 py-6 w-full max-w-lg mx-auto"
    >
      <div className="grid grid-cols-3 gap-4">
        {["year", "month", "date"].map((field) => (
          <input
            key={field}
            name={field}
            placeholder={`Enter ${field}`}
            value={formData[field]}
            onChange={handleChange}
            className="border rounded px-2 py-1"
          />
        ))}
      </div>
      <select
        name="selectAirline"
        value={formData.selectAirline}
        onChange={handleChange}
        className="border rounded px-2 py-1 mt-4 w-full"
      >
        <option value="">Select an Airline</option>
        <option value="Southern Railway">Southern Railway</option>
      </select>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <input
          name="fromStation"
          placeholder="From Station"
          value={formData.fromStation}
          onChange={handleChange}
          className="border rounded px-2 py-1"
        />
        <input
          name="toStation"
          placeholder="To Station"
          value={formData.toStation}
          onChange={handleChange}
          className="border rounded px-2 py-1"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        Predict
      </button>
    </form>
  );
};

export default Form;
