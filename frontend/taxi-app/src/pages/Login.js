import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const [showAnimation, setShowAnimation] =
    useState(false);

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:8080/users/login",
        user
      );

      if (res.status === 200 && res.data) {

        // SAVE LOGGED USER
        localStorage.setItem(
          "username",
          res.data.email
        );

        setMessage("✅ Login Successful!");

        setShowAnimation(true);

        setTimeout(() => {

          navigate("/dashboard");

        }, 4500);

      } else {

        setMessage("❌ Wrong email or password");

      }

    } catch (err) {

      setMessage("❌ Invalid Email or Password");

    }

  };

  return (

    <div style={container}>

      {/* GLOW */}
      <div style={glow1}></div>
      <div style={glow2}></div>

      {/* SUCCESS SCREEN */}
      {showAnimation ? (

        <div className="success-screen">

          <img
            src={logo}
            alt="logo"
            className="success-logo"
          />

          <h1 className="welcome-text">
            Welcome to Radham 🚕
          </h1>

          <div className="success-box">

            <h2>
              ✅ Login Successful!
            </h2>

            <p>
              📍 Location Status :
              <span className="green">
                {" "}ON
              </span>
            </p>

            <p>
              💰 Price Generated :
              <span className="green">
                {" "}✅
              </span>
            </p>

          </div>

          {/* LOADING BAR */}
          <div className="loading-bar">

            <div className="loading-fill"></div>

          </div>

        </div>

      ) : (

        <div style={card}>

          <img
            src={logo}
            alt="logo"
            style={logoStyle}
          />

          <h1 style={title}>
            Welcome to Radham 🚕
          </h1>

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={user.email}
              onChange={handleChange}
              required
              style={input}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={user.password}
              onChange={handleChange}
              required
              style={input}
            />

            <button
              type="submit"
              className="login-btn"
            >
              Login
              <span className="arrow">
                🚔
              </span>
            </button>

          </form>

          {message && (

            <p style={messageStyle}>
              {message}
            </p>

          )}

          <p style={registerText}>

            Don't have an account?

            <span
              style={registerLink}
              onClick={() => navigate("/register")}
            >
              {" "}Register
            </span>

          </p>

        </div>

      )}

      <style>{`

        *{
          box-sizing:border-box;
          font-family:Arial,sans-serif;
        }

        body{
          overflow:hidden;
        }

        .success-screen{
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          color:white;
        }

        .success-logo{
          width:230px;
          animation:logoZoom 1.5s ease;
        }

        .welcome-text{
          margin-top:-15px;
          font-size:38px;
          text-shadow:0 0 20px rgba(255,165,0,0.7);
        }

        .success-box{
          margin-top:20px;
          background:rgba(255,255,255,0.1);
          backdrop-filter:blur(15px);
          padding:25px;
          border-radius:20px;
          text-align:center;
          border:1px solid rgba(255,255,255,0.2);
          width:320px;
        }

        .green{
          color:#00ff99;
          font-weight:bold;
        }

        .loading-bar{
          margin-top:30px;
          width:300px;
          height:12px;
          background:rgba(255,255,255,0.15);
          border-radius:20px;
          overflow:hidden;
        }

        .loading-fill{
          width:0%;
          height:100%;
          background:
            linear-gradient(to right,#00d2ff,#00ff99);
          animation:loading 4.5s linear forwards;
        }

        @keyframes loading{
          from{width:0%;}
          to{width:100%;}
        }

        @keyframes logoZoom{
          0%{
            transform:scale(0.3);
            opacity:0;
          }

          100%{
            transform:scale(1);
            opacity:1;
          }
        }

        .login-btn{
          margin-top:15px;
          width:100%;
          padding:14px;
          border:none;
          border-radius:14px;
          background:rgba(255,165,0,0.85);
          color:white;
          font-size:17px;
          cursor:pointer;
          transition:0.4s;
          font-weight:bold;
        }

        .login-btn:hover{
          background:#ff9800;
          transform:scale(1.03);
        }

      `}</style>

    </div>
  );
}

const container = {
  minHeight: "100vh",
  background:
    "linear-gradient(to right, #141e30, #243b55)",
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

const card = {
  width: "100%",
  maxWidth: "400px",
  background: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(18px)",
  borderRadius: "25px",
  padding: "35px",
  textAlign: "center",
  color: "white",
  border: "1px solid rgba(255,255,255,0.2)"
};

const logoStyle = {
  width: "180px",
  marginBottom: "10px"
};

const title = {
  marginBottom: "25px"
};

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "14px",
  border: "none",
  outline: "none",
  background: "rgba(255,255,255,0.15)",
  color: "white"
};

const messageStyle = {
  marginTop: "15px",
  fontWeight: "bold"
};

const registerText = {
  marginTop: "20px",
  color: "#ddd"
};

const registerLink = {
  color: "#00d2ff",
  cursor: "pointer",
  fontWeight: "bold"
};

export default Login;