import React from "react";
import "./styles.css";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  return (
    <div id="dashboard">
      <Sidebar />
      <Navbar />
    </div>
  );
};

export default Dashboard;
