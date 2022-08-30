import React, { Component } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import './home.scss';
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
        console.log(response);
      })))
      .catch((error) => {
        console.log('Can\'t fetch.', error.message);
      })
  }

  /* <div className="status">
    <h6><b>Live Status</b>: I'm { this.state.currentStatus }</h6>
  </div> */
  render() {

    return (
      <div className="home">

        <div className="Intro">
          <Controller>
            <Scene
              triggerElement="#trigger"
              duration={4000}
            >
              {(progress) => (
                <Tween
                  to={{
                    // opacity: '0',
                    filter: 'blur(20px)',
                    transform: 'scale(0.9)',
                  }}
                  ease="Strong.easeOut"
                  totalProgress={progress}
                  paused
                >
                    <div className="intro-text">
                      <div className="Name">Bryan Min</div>
                      <div className="Greeting">
                        <h6>I’m a student studying Computer Science who loves front-end dev and aesthetic design. Currently, I'm an Undergraduate Research Assistant and Lead Developer in the <a className="t4g" href="https://tech4good.soe.ucsc.edu/#/" target="_blank" rel="noreferrer">Tech4Good Lab</a>.</h6>
                      </div>
                    </div>
                </Tween>
              )}
            </Scene>
          </Controller>
        </div>


        <div class="main">
          <div class="about-component">
            <About/>
          </div>
          <div class="angle-border"></div>
        </div>
      </div>
    )
  }
}

export default Home