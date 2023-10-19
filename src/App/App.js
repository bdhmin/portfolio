import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home/home';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
        <Router>
          {/* <NavBar /> */}
          <div className="body">
            <Switch>
              <Route exact path="/" component={Home}/>
              {/* <Route path="/about" component={About}/> */}
              {/* <Route path="/Projects/H2UTechnologies" component={H2UTechnologies}/> */}
              {/* <Route exact path="/docs/live-status" component={LiveStatusDoc}/> */}
            </Switch>
            <Footer />
          </div>

        </Router>
    </div>
  );
}

export default App;
