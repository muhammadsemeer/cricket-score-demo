import Home from "./components/Home/Home";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewMatch from "./components/CreateNewMatch/NewMatch";
import ScoreBook from "./components/Scorebook/ScoreBook";
import axios from "axios";
import { Ytpanel } from "./components/YoutubePanel/Ytpanel";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create-new-match">
            <NewMatch />
          </Route>
          <Route path="/scorebook/:id">
            <ScoreBook />
          </Route>
          <Route path="/youtube-panel">
            <Ytpanel />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
