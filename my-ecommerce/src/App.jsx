import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </>
  );
}

export default App;
