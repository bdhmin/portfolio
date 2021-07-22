import React, { Component } from 'react';
import './home.scss';
// import Projects from '../Projects/projects';
import About from '../About/about';
const axios = require('axios');

class Home extends Component {
  constructor() {
    super();
    this.state = {
      currentStatus: 'making you wait for my API call 😅',
      statusDate: 'date',
    }
  }

  componentDidMount = () => {
    const sheetsDB = "https://spreadsheets.google.com/feeds/cells/1EiFmoErOHeRcE0dUUXdwk_wf1mfcgq4d-25uShy-47A/od6/public/basic?alt=json";

    axios.get(sheetsDB)
      .then((response => this.setState({
        currentStatus: response.data.feed.entry[2].content.$t,
        statusDate: response.data.feed.entry[2].updated.$t
      }, () => {
        // console.log(response);
      })))
      .catch((error) => {
        // console.log('Can\'t fetch.', error.message);
      })
  }

  render() {
    return (
      <div className="Home">
        <div className="Intro">
          <div className="Name">Bryan Min</div>
          <div className="Greeting">
            <h6>I’m a student at UC Santa Cruz studying Computer Engineering who also loves aesthetic design. I'm working as a Web Developer in the <a href="https://tech4good.soe.ucsc.edu/#/" target="_blank" rel="noreferrer"><b>Tech4Good Labs</b></a>.</h6>
            <div className="status">
              <h6><b>Live Status</b>: Currently, I'm { this.state.currentStatus }</h6>
            </div>
          </div>
        </div>
  
        <About />
      </div>
    )
  }
}

export default Home