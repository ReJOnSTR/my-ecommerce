import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Contact from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import AboutPage from "./pages/AboutPages";
import SignUp from "./pages/SignUp";
import ProductDetail from "./pages/ProductDetail";
import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/about" component={AboutPage} />
        <Route path="/product/:id" component={ProductDetail} />{" "}
        <Route path="/contact" component={Contact} />
        <Route path="/team" component={TeamPage} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
    </>
  );
}

export default App;
