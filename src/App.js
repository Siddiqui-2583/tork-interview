import './App.css';
import Get from './Components/Get/Get';
import Post from "./Components/Post/Post";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <h2>Hi, This is home route</h2>
            <Link to="/get">
              <Button variant="outlined">Get</Button>
            </Link>
            <br />
            <br />
            <Link to="/post">
              <Button variant="outlined">Post</Button>
            </Link>
          </Route>
          <Route path="/get">
            <br/>
            <Link to="/">
              <Button variant="outlined">Home</Button>
            </Link>
            <Get />
          </Route>
          <Route path="/post">
            <br/>
            <Link to="/">
              <Button variant="outlined">Home</Button>
            </Link>
            <Post />
          </Route>
        </Switch>
      </Router>
      {/* <Get />
      <Post /> */}
    </div>
  );
}

export default App;
