import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

import logo from "../assets/logo.png";

function CashOnDelivery() {

  /* RANDOM DRIVER */

  const assignedRide = useMemo(() => {

    const driverNames = [
      "Rahul",
      "Arjun",
      "Kiran",
      "Vikram",
      "Surya",
      "Rohit",
      "Ajay",
      "Nikhil",
      "Sandeep",
      "Varun"
    ];

    const numberPlates = [
      "AP39 AB 1234",
      "TS08 CD 4567",
      "KA05 EF 7890",
      "TN10 GH 1122",
      "MH12 JK 3344",
      "DL09 LM 5566",
      "AP16 NO 7788",
      "TS11 PQ 9900",
      "KA22 RS 4433",
      "TN07 TU 6677"
    ];

    const vehicles = [
      "Swift Dzire",
      "Hyundai Aura",
      "Toyota Etios",
      "Maruti Ciaz",
      "Honda Amaze",
      "Toyota Innova",
      "Mahindra XUV",
      "Kia Carens",
      "Hyundai Creta",
      "Tata Nexon"
    ];

    return {

      driver:
        driverNames[
          Math.floor(Math.random() * driverNames.length)
        ],

      vehicle:
        vehicles[
          Math.floor(Math.random() * vehicles.length)
        ],

      plate:
        numberPlates[
          Math.floor(Math.random() * numberPlates.length)
        ]
    };

  }, []);

  /* TIMER */

  const totalSeconds = 300;

  const [seconds, setSeconds] = useState(totalSeconds);

  useEffect(() => {

    const timer = setInterval(() => {

      setSeconds((prev) => {

        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }

        return prev - 1;
      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const minutes = Math.floor(seconds / 60);

  const remainingSeconds = seconds % 60;

  /* PROGRESS */

  const progress =
    ((totalSeconds - seconds) / totalSeconds) * 100;

  /* SAVE RIDE TO BACKEND */

  useEffect(() => {

    const rideData = {

      username: localStorage.getItem("username"),

      rideType: "Mini",

      vehicle: assignedRide.vehicle,

      driverName: assignedRide.driver,

      vehicleNumber: assignedRide.plate,

      paymentMethod: "Cash on Delivery"
    };

    axios.post(
      "http://localhost:8080/rides/save",
      rideData
    )
    .then(() => {
      console.log("Ride Saved");
    })
    .catch((err) => {
      console.log(err);
    });

  }, [assignedRide]);

  return (
    <div style={container}>

      {/* GLOW */}
      <div style={glow1}></div>
      <div style={glow2}></div>

      {/* MAIN LAYOUT */}
      <div className="main-layout">

        {/* LEFT SIDE */}
        <div style={leftCard}>

          <img
            src={logo}
            alt="logo"
            style={logoStyle}
          />

          <h1 style={title}>
            🚕 Ride Confirmed
          </h1>

          <p style={subtitle}>
            Payment Method
          </p>

          <h2 style={codText}>
            💵 Cash on Delivery
          </h2>

          {/* DRIVER DETAILS */}
          <div style={infoBox}>

            <h3>👨 Driver Details</h3>

            <p>
              Driver: {assignedRide.driver}
            </p>

            <p>
              Vehicle: {assignedRide.vehicle}
            </p>

            <p>
              Vehicle No: {assignedRide.plate}
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div style={rightCard}>

          <h2 style={{
            marginBottom: "20px"
          }}>
            🚖 Driver Arrival
          </h2>

          {/* ROAD */}
          <div className="road-container">

            {/* PROGRESS */}
            <div
              className="road-progress"
              style={{
                width: `${progress}%`
              }}
            ></div>

            {/* CAR */}
            <div
              className="moving-car"
              style={{
                left: `${progress}%`
              }}
            >
              🚔
            </div>

          </div>

          {/* PERCENT */}
          <h1 style={{
            color: "#00d2ff",
            marginTop: "20px"
          }}>
            {Math.floor(progress)}%
          </h1>

          {/* TIMER */}
          <h1 className="timer-text">

            {minutes}:
            {remainingSeconds < 10
              ? `0${remainingSeconds}`
              : remainingSeconds}

          </h1>

          <p style={{
            color: "#ddd"
          }}>
            Driver is on the way...
          </p>

          {/* BUTTON */}
          <button
            className="home-btn"
            onClick={() => window.location.href="/dashboard"}
          >
            Back to Dashboard 🚕
          </button>

        </div>

      </div>

      {/* CSS */}
      <style>{`

        *{
          box-sizing:border-box;
          font-family:Arial,sans-serif;
        }

        body{
          overflow-x:hidden;
        }

        .main-layout{

          display:flex;

          gap:25px;

          width:100%;

          max-width:1000px;

          z-index:2;

          position:relative;
        }

        @media(max-width:900px){

          .main-layout{
            flex-direction:column;
          }

        }

        .home-btn{

          margin-top:30px;

          width:100%;

          padding:14px;

          border:none;

          border-radius:14px;

          background:rgba(255,165,0,0.85);

          color:white;

          font-size:16px;

          cursor:pointer;

          transition:0.4s;

          font-weight:bold;
        }

        .home-btn:hover{

          background:#ff9800;

          transform:scale(1.03);

          box-shadow:0 0 20px rgba(255,165,0,0.6);
        }

        .road-container{

          width:100%;

          height:16px;

          background:
            rgba(255,255,255,0.15);

          border-radius:20px;

          position:relative;

          overflow:hidden;

          margin-top:20px;
        }

        .road-progress{

          height:100%;

          background:
            linear-gradient(to right,#00d2ff,#00ff99);

          border-radius:20px;

          transition:1s linear;
        }

        .moving-car{

          position:absolute;

          top:-22px;

          transform:translateX(-50%);

          font-size:38px;

          transition:1s linear;
        }

        .timer-text{

          font-size:70px;

          margin-top:25px;

          margin-bottom:10px;

          color:#00ff99;

          text-shadow:
            0 0 25px rgba(0,255,153,0.7);

          animation:
            pulse 1s infinite;
        }

        @keyframes pulse{

          0%{
            transform:scale(1);
          }

          50%{
            transform:scale(1.05);
          }

          100%{
            transform:scale(1);
          }
        }

      `}</style>

    </div>
  );
}

/* PAGE */
const container = {
  minHeight: "100vh",
  background: "linear-gradient(to right, #141e30, #243b55)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  padding: "20px"
};

const glow1 = {
  position: "absolute",
  width: "250px",
  height: "250px",
  background: "orange",
  borderRadius: "50%",
  filter: "blur(120px)",
  top: "-80px",
  left: "-80px",
  opacity: 0.25
};

const glow2 = {
  position: "absolute",
  width: "250px",
  height: "250px",
  background: "#00d2ff",
  borderRadius: "50%",
  filter: "blur(120px)",
  bottom: "-80px",
  right: "-80px",
  opacity: 0.2
};

const leftCard = {
  flex: 1,
  background: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(18px)",
  borderRadius: "25px",
  padding: "30px",
  color: "white",
  border: "1px solid rgba(255,255,255,0.2)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
  textAlign: "center"
};

const rightCard = {
  flex: 1,
  background: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(18px)",
  borderRadius: "25px",
  padding: "30px",
  color: "white",
  border: "1px solid rgba(255,255,255,0.2)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};

const logoStyle = {
  width: "180px",
  marginBottom: "15px",
  filter: "drop-shadow(0 0 20px rgba(255,165,0,0.7))"
};

const title = {
  marginBottom: "10px"
};

const subtitle = {
  color: "#ddd"
};

const codText = {
  color: "#00ff99",
  marginBottom: "25px"
};

const infoBox = {
  background: "rgba(255,255,255,0.08)",
  borderRadius: "18px",
  padding: "20px",
  marginTop: "20px",
  textAlign: "left",
  lineHeight: "1.8"
};

export default CashOnDelivery;