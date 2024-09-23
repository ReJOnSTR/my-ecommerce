import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { verifyToken } from "./store/actions/clientActions";

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
  const user = useSelector((state) => state.client.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyUserToken = async () => {
      await dispatch(verifyToken());
      setIsLoading(false);
    };
    verifyUserToken();
  }, [dispatch]);

  if (isLoading) {
    return; // Veya daha güzel bir yükleme ekranı
  }

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (!user ? <Redirect to="/login" /> : <HomePage />)}
        />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <ProtectedRoute path="/shop" component={Shop} />
        <ProtectedRoute path="/product/:id" component={ProductDetail} />
        <ProtectedRoute path="/contact" component={Contact} />
        <ProtectedRoute path="/team" component={TeamPage} />
        <ProtectedRoute path="/about" component={AboutPage} />
      </Switch>
    </Router>
  );
}

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.client.user);
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default App;
