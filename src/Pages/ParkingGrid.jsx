import React, { useState } from "react";
import { Link } from "react-router-dom";

const ParkingGrid = () => {
  const [V_num, setV_num] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);

  const setVehicleNumber = e => {
    const newValue = e.target.value;
    setV_num(newValue);
    localStorage.setItem("V_num", newValue);
    console.log(V_num);
  };

  const num_0f_slots = localStorage.getItem("num_0f_slots");
  console.log(num_0f_slots);

  //   time using google
  function getCurrentTime() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    return `${hour}:${minute}:${second}`;
  }
  //   time

  // Random slot allocating function
  const randomSlot = () => {
    const slot = Math.floor(Math.random() * num_0f_slots);
    setSelectedSlot(slot);
    console.log(slot);
  };

  //   conformation function
  const conformation = () => {
    localStorage.setItem("slot", selectedSlot);
    const currentTime = getCurrentTime();
    localStorage.setItem("time", currentTime);
    // console.log("local time", localStorage.getItem("time"));
    // console.log("local slot",localStorage.getItem("slot"));
  };
  //   conformation function

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
        <button onClick={randomSlot} className="button">
          Park in random spot
        </button>
      </div>
      <div>
        <div className="grid">
          {slots.map(slot =>
            <div
              key={slot}
              className="slot"
              style={{
                textAlign: "center",
                border: "1px solid #ccc",
                backgroundColor: slot === selectedSlot ? "black" : "#f0f0f0",
                color: slot === selectedSlot ? "white" : "black",
                padding: "10px"
              }}
            >
              {slot}
            </div>
          )}
        </div>
        <Link to={`/checkout`}>
        <button onClick={conformation}>Confirm</button>
        </Link>

        <div className="note">the price of parking here is 10$ / hour, what do you mean by <span className="color-red">I have a cycle</span></div>
      </div>
    </div>
  );
};

export default ParkingGrid;
