import React from "react";
import "./index.css";
import Conversations from "./components/Messages/Conversations";
import Dashboard from "./components/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/messages" element={<Conversations />} />
      </Routes>
    </>
  );
};

export default App;
