// src/Prediction.js
import React, { useState } from "react";
import Form from "./Form";
import Graph from "./Graph";
import data from "./data/trains.json";
import Swal from 'sweetalert2'
const Prediction = () => {
  const [result, setResult] = useState([]);

  const handlePredict = (formData) => {
    const filteredData = data.filter(
      (train) =>
        train.year === formData.year &&
        train.month === formData.month &&
        train.date === formData.date &&
        train.selectAirline === formData.selectAirline &&
        train.fromStation === formData.fromStation &&
        train.toStation === formData.toStation
    );

    // Calculate the total delay time
    const totalDelay = filteredData.reduce(
      (sum, train) => sum + (train.delayTime || 0),
      0
    );

    // Show the alert message with total delay
    if (filteredData.length > 0) {
    //   window.alert(`Total delay time for the selected trains: ${totalDelay} hours`);
    Swal.fire({
        title: "Total delay time for the selected trains",
        text: `${totalDelay} hours`,
        icon: "success"
      });
    } else {
    //   window.alert("No trains match the selected criteria!");
    Swal.fire({
        title: "No trains match the selected criteria!",
        text: "Check and enter correct details",
        icon: "error"
      });
    }

    // Update the result to display the graph
    setResult(filteredData);
  };

  return (
    <div className="bg-cover bg-center h-screen p-8 mt-[150px]">
      <h1 className="text-center text-3xl font-bold mb-8 text-blue-500">
        Train Delay Prediction
      </h1>
      <Form onPredict={handlePredict} />
      <div className="mt-[50px] w-[700px] h-[700px] ml-[300px]">
        {result.length > 0 && <Graph delayData={result} />}
      </div>
    </div>
  );
};

export default Prediction;
