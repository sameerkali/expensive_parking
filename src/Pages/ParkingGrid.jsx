import "../App.css";
import React, { useState } from "react";

const ParkingGrid = () => {
  const [V_num, setV_num] = useState("");
  const setVehicleNumber = e => {
    const newValue = +e.target.value;
        setV_num(newValue);
      localStorage.setItem("V_num", V_num);
      console.log(V_num);
  };

  const num_0f_slots = localStorage.getItem("num_0f_slots");
  console.log(num_0f_slots);
  return (
    <div>
      <div>
        <input
          className="Input_home home_values"
          placeholder="69"
          onChange={setVehicleNumber}
          type="text"
        />
      </div>
    </div>
  );
};

export default ParkingGrid;
