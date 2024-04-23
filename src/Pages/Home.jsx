import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  const [num_0f_slots, setNum_0f_slots] = useState("");

  const setNumber = e => {
    const newValue = +e.target.value; // i know that "+" already {no use of GPT or google here}
    if (newValue >= 0) {
      setNum_0f_slots(newValue);
      localStorage.setItem("num_0f_slots", newValue);
      console.log(num_0f_slots);
    }
  };
//   const isButton_desabled = num_0f_slots.trim() === "0"

  return (
    <div>
      <h1 className="h1_home home_values">Please enter the number of slots</h1>
      <div className="flex-col">
        <input
          className="Input_home home_values"
          placeholder="69"
          value={num_0f_slots}
          onChange={setNumber}
          type="number"
        />
        <Link to={`/parking`}>
          <button /* disabled={isButtonDisabled} */ className="button">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
