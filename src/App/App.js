import './App.scss';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import NavBar from './NavBar/navbar';
import Home from './Home/home';
import About from './About/about';
import ProjectsPage from './Projects/projectsPage';
import Art from './Art/art';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Projects" component={ProjectsPage}/>
          <Route exact path="/Art" component={Art}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
