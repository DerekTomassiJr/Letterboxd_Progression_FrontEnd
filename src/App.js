import React from "react";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import Directors from "./pages/Directors.js";
import Profile from "./pages/Profile.js";
import Actors from "./pages/Actors.js";
import Achievements from "./pages/Achievements.js";
import Settings from "./pages/Settings.js";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/directors" element={<Directors />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  )
}

export default App;