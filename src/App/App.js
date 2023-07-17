import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar/navbar';
import Home from './pages/Home/home';
import Timeline from './pages/Timeline/timeline';
import Footer from './components/Footer/footer';
import Projects from './pages/Projects/projects';
import Background from './pages/Background/background';
// import H2UTechnologies from './Projects/H2UTechnologies/h2utechnologies';
import Photography from './pages/Photography/photography';
// import LiveStatusDoc from './documentation/LiveStatusDoc/live-status-doc';

function App() {
  return (
    <div className="App">
        <Router>
          {/* <NavBar /> */}
          <div className="body">
            <Switch>
              <Route exact path="/" component={Home}/>
              {/* <Route path="/about" component={About}/> */}
              <Route path="/background" component={Background}/>
              <Route path="/timeline" component={Timeline}/>
              <Route path="/projects" component={Projects}/>
              {/* <Route path="/Projects/H2UTechnologies" component={H2UTechnologies}/> */}
              <Route path="/gallery" component={Photography}/>
              {/* <Route exact path="/docs/live-status" component={LiveStatusDoc}/> */}
            </Switch>
            <Footer />
          </div>

        </Router>
    </div>
  );
}

export default App;
