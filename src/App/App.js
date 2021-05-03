import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './NavBar/navbar';
import Home from './Home/home';
import About from './About/about';
import ProjectsPage from './Projects/projectsPage';
import H2UTechnologies from './Projects/H2UTechnologies/h2utechnologies';
import Photography from './Photography/photography';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Projects" component={ProjectsPage}/>
          <Route path="/Projects/H2UTechnologies" component={H2UTechnologies}/>
          <Route path="/Photography" component={Photography}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
