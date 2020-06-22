import React, { useState } from "react";

import "./styles.css";

import Favorites from "../../components/Favorites";
import Navbar from "../../components/Navbar";
import Ranking from "../../components/Ranking";
import Schedule from "../../components/Schedule";
import Search from "../../components/Search";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("search");

  const components = {
    search() {
      return <Search />;
    },
    ranking() {
      return <Ranking />;
    },
    schedule() {
      return <Schedule />;
    },
    favorites() {
      return <Favorites />;
    },
  };

  const onActiveTabChangeHandler = (newActiveTab) => {
    setActiveTab(newActiveTab);
  };

  return (
    <div id="dashboard">
      <Sidebar
        onActiveTabChange={onActiveTabChangeHandler}
        activeTab={activeTab}
      />
      <Navbar />
      <div id="main">{components[activeTab]()}</div>
    </div>
  );
};

export default Dashboard;
