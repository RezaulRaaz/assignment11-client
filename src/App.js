import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Common/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import AddService from "./Components/Dashboard/AddService/AddService";
import ServicesList from "./Components/Dashboard/ServiceList/ServicesList";
import Review from "./Components/Dashboard/Review/Review";
import ReviewList from "./Components/Dashboard/ReviewList/ReviewList";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Order from "./Components/Dashboard/Order/Order";
import EnrolledServices from "./Components/Dashboard/EnrolledServices/EnrolledServices";
import Admin from "./Components/Dashboard/AddAdmin/Admin";
export const UserContext = createContext();
function App() {
  const [allData, setData] = useState({});
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if(token) {
      fetch("https://tranquil-shelf-58388.herokuapp.com", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
        .then((res) => res.json())
        .then((result) => {
           setData(result)
     });
    }
  }, []);
  return (
    <div className="App">
      <UserContext.Provider value={[allData, setData]}>
        <Router>
          <Switch>
            <PrivateRoute path="/dashboard/enrolled/service">
              <EnrolledServices />
            </PrivateRoute>     
            <PrivateRoute path="/dashboard/add/admin">
              <Admin/>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/service/enrol">
              <Order />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/add/review/list">
              <ReviewList />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/add/review">
              <Review />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/add/services">
              <AddService />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/list">
              <ServicesList />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/order">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
