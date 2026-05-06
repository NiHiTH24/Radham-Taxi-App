import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CashOnDelivery from "./pages/CashOnDelivery";
import MyRides from "./pages/MyRides";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* LOGIN */}
        <Route
          path="/"
          Component={Login}
        />

        {/* REGISTER */}
        <Route
          path="/register"
          Component={Register}
        />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          Component={Dashboard}
        />

        {/* CASH ON DELIVERY */}
        <Route
          path="/cashondelivery"
          Component={CashOnDelivery}
        />

        {/* MY RIDES */}
        <Route
          path="/myrides"
          Component={MyRides}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;