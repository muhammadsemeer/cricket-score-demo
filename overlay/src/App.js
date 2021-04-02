import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Overlay from "./pages/Demo/Overlay";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/:id/:session">
            <Overlay />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
