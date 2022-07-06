import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './NavBar/navbar';
import Home from './Home/home';
import Footer from './Footer/footer';
import Projects from './Projects/projects';
// import H2UTechnologies from './Projects/H2UTechnologies/h2utechnologies';
import Photography from './Photography/photography';
import LiveStatusDoc from './Documentation/LiveStatusDoc/live-status-doc';

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar />
          <div className="body">
            <Switch>
              <Route exact path="/" component={Home}/>
              {/* <Route path="/about" component={About}/> */}
              <Route path="/projects" component={Projects}/>
              {/* <Route path="/Projects/H2UTechnologies" component={H2UTechnologies}/> */}
              <Route path="/gallery" component={Photography}/>
              <Route exact path="/docs/live-status" component={LiveStatusDoc}/>
            </Switch>

            <Footer />
          </div>

        </Router>
    </div>
  );
}

export default App;
