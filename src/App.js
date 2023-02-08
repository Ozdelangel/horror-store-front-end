import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddReview from "./components/add-review";
import Login from "./components/login";
import RestaurantList from "./components/restaurant-list";
import Restaurant from "./components/restaurants";
//  this is our root file for our react app and is a good place to put all our router stuff so the client can switch routes
function App() {
  return (
   <div>
    Hello world !
    <AddReview/>
    <Login/>
    <RestaurantList/>
    <Restaurant/>
   </div>
  );
}

export default App;
