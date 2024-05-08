import React from "react";

const ConfirmedBooking = ({ formData }) => {
  const { email, guests, times } = formData;

  return (
    <div className="confirm">
      <div>
        <h1>
          Booking has been <span>confirmed!</span>
        </h1>
        <h3>Confirmation email has been sent to {email}</h3>
        <p>There are {guests} guests for {times}</p>
      </div>
    </div>
  );
}

export default ConfirmedBooking;