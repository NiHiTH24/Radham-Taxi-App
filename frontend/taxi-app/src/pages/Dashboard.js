import React, { useState } from "react";

import logo from "../assets/logo.png";

import miniTaxi from "../assets/mini_taxi.jpeg";
import sedanTaxi from "../assets/sudan.jpeg";
import suvTaxi from "../assets/suv.jpeg";

function Dashboard() {

  const [showMenu, setShowMenu] = useState(false);

  const [selectedRide, setSelectedRide] = useState("");

  const [showPayment, setShowPayment] = useState(false);

  const logout = () => {
    window.location.href = "/";
  };

  const bookRide = (ride) => {
    setSelectedRide(ride);
    setShowPayment(true);
  };

  return (
    <div style={container}>

      {/* BACKGROUND GLOW */}
      <div style={bgGlow1}></div>
      <div style={bgGlow2}></div>

      {/* TOP BAR */}
      <div style={topBar}>

        {/* PROFILE */}
        <div style={{ position: "relative", marginLeft: "auto" }}>

          <div
            onClick={() => setShowMenu(!showMenu)}
            style={profileCircle}
          >
            👤
          </div>

          {/* MENU */}
          {showMenu && (
            <div style={dropdownMenu}>

              {/* PROFILE */}
              <p style={menuItem}>
                👤 Profile
              </p>

              {/* MY RIDES */}
              <p
                style={menuItem}
                onClick={() => {
                  window.location.href = "/myrides";
                }}
              >
                🚕 My Rides
              </p>

              {/* SETTINGS */}
              <p style={menuItem}>
                ⚙ Settings
              </p>

              {/* LOGOUT */}
              <p
                style={{
                  ...menuItem,
                  color: "#ff7675"
                }}
                onClick={logout}
              >
                🚪 Logout
              </p>

            </div>
          )}

        </div>

      </div>

      {/* CENTER LOGO */}
      <div style={centerLogoBox}>

        <img
          src={logo}
          alt="logo"
          style={mainLogo}
        />

        {/* SCROLL TEXT */}
        <div className="scroll-container">

          <h1 className="scroll-text">
            🚕 Welcome to Radham 🚕
          </h1>

        </div>

      </div>

      {/* PAYMENT POPUP */}
      {showPayment && (

        <div style={popupOverlay}>

          <div style={paymentPopup}>

            <h1>🚕 {selectedRide}</h1>

            <h2>Select Payment Method</h2>

            {/* COD */}
            <button
              className="payment-btn"
              onClick={() => {
                window.location.href="/cashondelivery";
              }}
            >
              💵 Cash on Delivery
            </button>

            {/* ONLINE */}
            <button
              className="payment-btn online-btn"
              onClick={() => {
                alert("🚧 Online Payment Coming Soon");
              }}
            >
              💳 Online Payment
            </button>

            {/* CLOSE */}
            <button
              className="close-btn"
              onClick={() => setShowPayment(false)}
            >
              ✖ Close
            </button>

          </div>

        </div>

      )}

      {/* RIDE CARDS */}
      <div style={ridesContainer}>

        {/* MINI */}
        <div className="ride-card">

          <img
            src={miniTaxi}
            alt="Mini Taxi"
            style={carImage}
          />

          <h2>🚖 Mini</h2>

          <p>Affordable everyday rides</p>

          <h1>₹100</h1>

          <button
            className="ride-btn"
            onClick={() => bookRide("Mini")}
          >
            Book Now
            <span className="arrow">🚔</span>
          </button>

        </div>

        {/* SEDAN */}
        <div className="ride-card">

          <img
            src={sedanTaxi}
            alt="Sedan Taxi"
            style={carImage}
          />

          <h2>🚘 Sedan</h2>

          <p>Comfortable premium rides</p>

          <h1>₹150</h1>

          <button
            className="ride-btn"
            onClick={() => bookRide("Sedan")}
          >
            Book Now
            <span className="arrow">🚔</span>
          </button>

        </div>

        {/* SUV */}
        <div className="ride-card">

          <img
            src={suvTaxi}
            alt="SUV Taxi"
            style={carImage}
          />

          <h2>🚙 SUV</h2>

          <p>Large rides for family trips</p>

          <h1>₹200</h1>

          <button
            className="ride-btn"
            onClick={() => bookRide("SUV")}
          >
            Book Now
            <span className="arrow">🚔</span>
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

        /* SCROLL TEXT */

        .scroll-container{
          width:100%;
          overflow:hidden;
          white-space:nowrap;
          margin-top:-15px;
          margin-bottom:5px;
        }

        .scroll-text{

          display:inline-block;

          font-size:30px;

          color:white;

          text-shadow:
            0 0 20px rgba(255,165,0,0.7);

          animation:
            scrollText 8s linear infinite;
        }

        @keyframes scrollText{

          0%{
            transform:translateX(-100%);
          }

          100%{
            transform:translateX(100%);
          }
        }

        /* GLASS CARD */

        .ride-card{
          width:280px;
          background:rgba(255,255,255,0.08);
          border-radius:25px;
          padding:15px;
          text-align:center;
          color:white;
          backdrop-filter:blur(18px);
          border:1px solid rgba(255,255,255,0.15);
          box-shadow:0 8px 32px rgba(0,0,0,0.35);
          transition:0.4s ease;
          transform-style:preserve-3d;
          cursor:pointer;
        }

        .ride-card:hover{
          transform:
            rotateY(10deg)
            rotateX(5deg)
            scale(1.05);

          box-shadow:
            0 15px 35px rgba(0,0,0,0.5),
            0 0 20px rgba(255,165,0,0.4);

          background:rgba(255,255,255,0.12);
        }

        /* BOOK BUTTON */

        .ride-btn{
          margin-top:10px;
          width:100%;
          padding:12px;
          border:none;
          border-radius:14px;
          background:rgba(255,165,0,0.8);
          color:white;
          font-size:16px;
          cursor:pointer;
          transition:0.4s;
          position:relative;
          overflow:hidden;
          font-weight:bold;
        }

        .ride-btn:hover{
          background:#ff9800;
          transform:scale(1.05);
          box-shadow:0 0 20px rgba(255,165,0,0.6);
        }

        .ride-btn .arrow{
          display:inline-block;
          margin-left:10px;
          transition:0.4s;
        }

        .ride-btn:hover .arrow{
          transform:translateX(10px);
        }

        /* PAYMENT BUTTON */

        .payment-btn{
          width:100%;
          padding:14px;
          margin-top:15px;
          border:none;
          border-radius:14px;
          background:rgba(255,165,0,0.85);
          color:white;
          font-size:17px;
          cursor:pointer;
          transition:0.3s;
        }

        .payment-btn:hover{
          transform:scale(1.03);
          background:#ff9800;
        }

        .online-btn{
          background:rgba(0,210,255,0.8);
        }

        .online-btn:hover{
          background:#00d2ff;
        }

        /* CLOSE */

        .close-btn{
          margin-top:20px;
          padding:10px 20px;
          border:none;
          border-radius:12px;
          background:#ff6b6b;
          color:white;
          cursor:pointer;
        }

        @media(max-width:900px){

          .ride-card{
            width:100%;
            max-width:330px;
          }

          .scroll-text{
            font-size:24px;
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
  padding: "10px 20px",
  color: "white",
  position: "relative",
  overflow: "hidden"
};

/* GLOW */
const bgGlow1 = {
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

const bgGlow2 = {
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

/* TOP BAR */
const topBar = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginBottom: "0px",
  position: "relative",
  zIndex: 20
};

/* CENTER LOGO */
const centerLogoBox = {
  textAlign: "center",
  marginBottom: "15px",
  marginTop: "-15px",
  position: "relative",
  zIndex: 2
};

const mainLogo = {
  width: "170px",
  marginBottom: "-20px",
  filter: "drop-shadow(0 0 20px rgba(255,165,0,0.7))"
};

/* PROFILE */
const profileCircle = {
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  background: "rgba(255,255,255,0.15)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "22px",
  cursor: "pointer",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.2)"
};

/* MENU */
const dropdownMenu = {
  position: "absolute",
  right: 0,
  top: "55px",
  width: "170px",
  background: "rgba(255,255,255,0.12)",
  backdropFilter: "blur(15px)",
  borderRadius: "15px",
  padding: "10px",
  border: "1px solid rgba(255,255,255,0.2)",
  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  zIndex: 999
};

const menuItem = {
  padding: "10px",
  borderRadius: "10px",
  cursor: "pointer",
  transition: "0.3s"
};

/* RIDES */
const ridesContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  flexWrap: "wrap",
  position: "relative",
  zIndex: 2
};

/* IMAGE */
const carImage = {
  width: "100%",
  height: "140px",
  objectFit: "cover",
  borderRadius: "18px",
  marginBottom: "10px"
};

/* POPUP */
const popupOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.65)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 100
};

const paymentPopup = {
  width: "350px",
  background: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(18px)",
  borderRadius: "20px",
  padding: "30px",
  textAlign: "center",
  border: "1px solid rgba(255,255,255,0.2)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.35)"
};

export default Dashboard;