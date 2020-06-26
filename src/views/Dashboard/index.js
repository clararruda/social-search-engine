import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Dimmer, Loader } from "semantic-ui-react";

import "./styles.css";

import Favorites from "../../components/Favorites";
import Navbar from "../../components/Navbar";
import Ranking from "../../components/Ranking";
import Schedule from "../../components/Schedule";
import Search from "../../components/Search";
import Sidebar from "../../components/Sidebar";
import firebase from "../../utils/firebase";

const Dashboard = (props) => {
  const [activeTab, setActiveTab] = useState("search");
  const [user, setUser] = useState(null);
  const [plan, setPlan] = useState(null);

  const { history } = props;

  useEffect(() => {
    (async () => {
      const currentUser = firebase.getCurrentUser();
      const currentUserData = await firebase.getCurrentUserData(currentUser);
      setUser(currentUser);
      setPlan(currentUserData.plan);
    })();
  }, [user, plan]);

  if (!firebase.getCurrentUser()) {
    history.replace("/");
    return null;
  }

  const components = {
    search() {
      return <Search plan={plan} />;
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

  const onLogoutHandler = async () => {
    await firebase.logout();
    history.push("/");
  };

  const onPlanUpdateHandler = (newPlan) => {
    setPlan(newPlan);
  };

  return user ? (
    <div id="dashboard">
      <Sidebar
        onActiveTabChange={onActiveTabChangeHandler}
        activeTab={activeTab}
        plan={plan}
      />
      <Navbar
        onLogout={onLogoutHandler}
        user={user}
        plan={plan}
        onPlanUpdate={onPlanUpdateHandler}
      />
      <div id="main">{components[activeTab]()}</div>
    </div>
  ) : (
    <Dimmer active>
      <Loader />
    </Dimmer>
  );
};

Dashboard.propTypes = {
  history: PropTypes.object,
};

export default Dashboard;
