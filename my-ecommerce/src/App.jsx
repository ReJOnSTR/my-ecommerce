import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkAuthStatus } from "./store/actions/clientActions";

// Page imports
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Contact from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import ProductDetail from "./pages/ProductDetail";
import AboutPage from "./pages/AboutPages";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUp";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/contact" component={Contact} />
        <Route path="/team" component={TeamPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
      </Switch>
    </Router>
  );
}

export default App;
