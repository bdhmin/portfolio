import './App.scss';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import NavBar from './NavBar/navbar';
import About from './About/about';
import Projects from './Projects/projects';

function App() {
  return (
    <div className="App">
      <Router>

        <NavBar />
        <Switch>

          <Route exact path="/">
            <Redirect to="/About" />
          </Route>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Projects" component={Projects}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
