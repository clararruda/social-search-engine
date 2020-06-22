import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dimmer, Loader } from "semantic-ui-react";

import "./styles.css";

import Dashboard from "../../views/Dashboard";
import Landing from "../../views/Landing";
import Login from "../../views/Login";
import Register from "../../views/Register";
import firebase from "../../utils/firebase";

const App = () => {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then((value) => {
      setFirebaseInitialized(value);
    });
  });

  return firebaseInitialized !== false ? (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  ) : (
    <Dimmer active>
      <Loader />
    </Dimmer>
  );
};

export default App;
