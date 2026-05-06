import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png";

function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER"
  });

  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8080/users/register",
        user
      );

      setMessage("Registered Successfully!");
      setShowSuccess(true);

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);

    } catch (error) {

      setMessage("❌ Error while registering");

    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(to right, #141e30, #243b55)"
    }}>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(0,0,0,0.85)",
          padding: "40px",
          borderRadius: "20px",
          textAlign: "center",
          color: "white",
          zIndex: "999",
          boxShadow: "0 0 25px rgba(0,255,0,0.6)"
        }}>
          <div style={{
            fontSize: "80px",
            marginBottom: "10px"
          }}>
            ✅
          </div>

          <h2>{message}</h2>
        </div>
      )}

      <form onSubmit={handleSubmit} style={{
        background: "rgba(255,255,255,0.1)",
        padding: "40px",
        borderRadius: "15px",
        width: "320px",
        backdropFilter: "blur(10px)",
        boxShadow: "0 0 20px rgba(0,0,0,0.4)",
        textAlign: "center",
        color: "white"
      }}>

        <img
          src={logo}
          alt="logo"
          style={{
            width: "200px",
            marginBottom: "10px"
          }}
        />

        <h2>Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <select
          name="role"
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="USER">User</option>
          <option value="DRIVER">Driver</option>
        </select>

        <button className="cssbuttons-io-button" type="submit">
          Register
          <div className="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>

        <p style={{ marginTop: "15px" }}>
          Already have account?{" "}
          <a href="/" style={{ color: "#ffd54f" }}>
            Login
          </a>
        </p>

        {!showSuccess && (
          <p style={{ marginTop: "15px", color: "#fff" }}>
            {message}
          </p>
        )}

      </form>

      <style>{`
        .cssbuttons-io-button {
          background: #ff9800;
          color: white;
          font-family: inherit;
          padding: 0.35em;
          padding-left: 1.2em;
          font-size: 17px;
          font-weight: 500;
          border-radius: 0.9em;
          border: none;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          overflow: hidden;
          position: relative;
          height: 2.8em;
          padding-right: 3.3em;
          cursor: pointer;
          width: 100%;
          justify-content: center;
          margin-top: 10px;
        }

        .cssbuttons-io-button .icon {
          background: white;
          margin-left: 1em;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2.2em;
          width: 2.2em;
          border-radius: 0.7em;
          right: 0.3em;
          transition: all 0.3s;
        }

        .cssbuttons-io-button:hover .icon {
          width: calc(100% - 0.6em);
        }

        .cssbuttons-io-button .icon svg {
          width: 1.1em;
          transition: transform 0.3s;
          color: #ff9800;
        }

        .cssbuttons-io-button:hover .icon svg {
          transform: translateX(0.1em);
        }
      `}</style>

    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "none"
};

export default Register;