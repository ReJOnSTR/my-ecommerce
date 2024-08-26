import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Contact from "./pages/ContactPage";
import ProductDetail from "./pages/ProductDetail"; // Yeni import
import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/product/:id" component={ProductDetail} />{" "}
        <Route path="/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
