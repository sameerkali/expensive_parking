import React, { useState } from "react";

const ParkingGrid = () => {
  const [V_num, setV_num] = useState("");

  const setVehicleNumber = (e) => {
    const newValue = e.target.value;
    setV_num(newValue);
    localStorage.setItem("V_num", newValue);
    console.log(V_num);
  };

  const num_0f_slots = localStorage.getItem("num_0f_slots");
  console.log(num_0f_slots);

//   random slot allocating function "😭😢🥲"
const randomSlot = () => {
    const slot = Math.floor(Math.random() * num_0f_slots);
    console.log(slot);
}

  const slots = [];
  for (let i = 1; i <= num_0f_slots; i++) {
    slots.push(i);
  }

  return (
    <div>
      <div className="flex-col">
        <input
          className="Input_home home_values"
          placeholder="69"
          onChange={setVehicleNumber}
          type="text"
        />
        <button className="button">Park in random spot</button>
      </div>
      <div>
        <div className="grid">
          {slots.map((slot) => (
            <div
              key={slot}
              className="slot"
              style={{
                textAlign: "center",
                border: "1px solid #ccc",
                backgroundColor: "#f0f0f0",
                padding: "10px",
              }}
            >
              {slot}
            </div>
          ))}
        </div>
        <button onClick={randomSlot} >click me </button>
      </div>
    </div>
  );
};

export default ParkingGrid;
