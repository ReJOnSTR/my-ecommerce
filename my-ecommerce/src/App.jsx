import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
