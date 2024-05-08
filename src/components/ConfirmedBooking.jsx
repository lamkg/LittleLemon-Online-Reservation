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
        <h3>There are {guests} guests for {times}</h3>
        <p>Please contact CS or call if there are any changes that need to be made.</p>
      </div>
    </div>
  );
}

export default ConfirmedBooking;