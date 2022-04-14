import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Register } from "./Pages/Register";
import { Home } from "./Pages/Home";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [user, setUser] = useState([]);

  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Register user={user} setUser={setUser} />
        </Route>
        <Route exact path="/Home/:id">
          <Home user={user} />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;
