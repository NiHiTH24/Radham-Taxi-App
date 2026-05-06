import React, { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function MyRides() {

  const navigate = useNavigate();

  const [rides, setRides] = useState([]);

  useEffect(() => {

    const username =
      localStorage.getItem("username");

    axios.get(
      `http://localhost:8080/rides/${username}`
    )

    .then((res) => {

      setRides(res.data);

    })

    .catch((err) => {

      console.log(err);

    });

  }, []);

  return (

    <div style={container}>

      <h1 style={title}>
        🚕 My Booked Rides
      </h1>

      <div style={ridesContainer}>

        {rides.map((ride, index) => (

          <div key={index} style={rideCard}>

            <h2>
              {ride.rideType}
            </h2>

            <p>
              👨 Driver: {ride.driverName}
            </p>

            <p>
              🚗 Vehicle: {ride.vehicle}
            </p>

            <p>
              🔢 Number: {ride.vehicleNumber}
            </p>

            <p>
              💳 Payment: {ride.paymentMethod}
            </p>

          </div>

        ))}

      </div>

      {/* DASHBOARD BUTTON */}
      <button
        className="dashboard-btn"
        onClick={() => navigate("/dashboard")}
      >
        🚕 Back to Dashboard
      </button>

      <style>{`

        .dashboard-btn{

          margin-top:40px;

          padding:14px 28px;

          border:none;

          border-radius:14px;

          background:
            rgba(255,165,0,0.85);

          color:white;

          font-size:16px;

          cursor:pointer;

          transition:0.3s;

          font-weight:bold;
        }

        .dashboard-btn:hover{

          background:#ff9800;

          transform:scale(1.05);

          box-shadow:
            0 0 20px rgba(255,165,0,0.5);
        }

      `}</style>

    </div>
  );
}

const container = {
  minHeight: "100vh",
  background:
    "linear-gradient(to right,#141e30,#243b55)",
  padding: "30px",
  color: "white",
  textAlign: "center"
};

const title = {
  marginBottom: "30px"
};

const ridesContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px"
};

const rideCard = {
  width: "300px",
  background: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(15px)",
  borderRadius: "20px",
  padding: "20px",
  border: "1px solid rgba(255,255,255,0.2)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.35)"
};

export default MyRides;