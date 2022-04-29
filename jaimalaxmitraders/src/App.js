import './App.css';
import React, {useEffect} from "react"
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Orders from "./Orders";
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"

const promise = loadStripe('pk_test_51Kk3ZdKMZtqqiLCSug0kTnwIvLUqgEzyDKppa3Bp3dJ3v5Fdhhc3WqTfkxgtv3694Aqcxt1hyhN0AgpKHUb4wXP5006l1I1tIO');
function App() {
  // eslint-disable-next-line no-empty-pattern
  const [{},dispatch]=useStateValue();
  useEffect(() => {
//will only run once when the the app component loads
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>', authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
}, [dispatch]);
  return (
    <Router>
      <div className="app">
     
        <Switch>
        <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
          <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
          <Payment />
          </Elements>
            {/* <Checkout /> */}
            <Footer />
          </Route>
          <Route path="/">
          <Header />
            <Home />
            <Footer />
          </Route>
         
        </Switch>

      </div>
    </Router>
  );
}

export default App;
