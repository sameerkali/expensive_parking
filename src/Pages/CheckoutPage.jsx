import React, { useState } from "react";

const CheckoutPage = () => {
  const time = localStorage.getItem("time");
  const slot = localStorage.getItem("slot");
  const V_num = localStorage.getItem("V_num");
  console.log("old time", time);

  //   time using google
  function getCurrentTime() {
    const now = new Date();
    const hour = now.getHours();
    return `${hour}`;
  }
  //   time
  const currentTime = getCurrentTime();
  console.log(currentTime);

  // calculate the principle amount of time by 10$/H
  const calculatePrice = () => {
    const startTime = +time;
    const endTime = +currentTime;
    let differences = endTime - startTime;
    // If the end time is less than the start time, it means the current day has passed, so we add 24 hours to the difference
    if (differences < 0) {
      differences += 24;
    }
    const totalPrice = differences * 10; // $10 per hour
    return totalPrice.toFixed(2); // Round to 2 decimal places
  };

  // Calculate the total price
  const totalPrice = calculatePrice();

  return (
    <div>
        <h1>Checkout Page</h1>
      <div className="bill">
        <p>Time: {time}</p>
        <p>Slot: {slot}</p>
        <p>Vehicle Number: {V_num}</p>
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default CheckoutPage;
