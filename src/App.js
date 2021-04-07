import React from "react";
import Map from "./components/Map";
import Login from "./components/Login";
import About from "./components/About";
import Error from "./components/Error";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider } from "./auth/Auth";



function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Map} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/about" exact component={About} />
          <Route path="/error" exact component={Error} />
          <Redirect path="*" to='/error' />
        </Switch>
      </Router>
    </AuthProvider>
  );
}
export default App;
