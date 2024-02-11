import React, { Component } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import './home.scss';
import About from '../about/about';
import Projects from '../projects/projects';
import Publications from '../publications/publications';
import { Tag } from '../../components/tag/tag';

class Home extends Component {

  render() {
    return (
      <div className="home">
        <section className="Intro">
          <Controller>
            <Scene
              triggerElement="#trigger"
              duration={4000}
            >
              {(progress) => (
                <Tween
                  to={{
                    opacity: '0',
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
                        <h6>HCI research at the <Tag name="creativity">Creativity Lab</Tag>.</h6>
                        {/* <h6>Demonstrating <Tag name="masonview-uist23">Masonview</Tag> at UIST 2023. October 30, 2023.</h6> */}
                        {/* <h6><i>Seeking Fall 2024 PhD Programs!</i></h6> */}
                        {/* Currently at <a className="link kixlab" href="https://www.kixlab.org/" target="_blank" rel="noreferrer">KIXLAB</a>. */}
                        {/* <h6>Information management. HCI research at the <a className="creativity" href="https://creativity.ucsd.edu/" target="_blank" rel="noreferrer">Creativity Lab</a>.</h6> */}
                        {/* <h6>Computer Science at <a className="ucsd" href="https://ucsd.edu" target="_blank" rel="noreferrer">UC San Diego</a>. HCI research at the <a className="creativity" href="https://creativity.ucsd.edu/" target="_blank" rel="noreferrer">Creativity Lab</a>.</h6> */}
                        {/* <h6>Webdev, HCI research, and minimalism at UCSD. Currently, I'm an Undergraduate Research Assistant and Lead Developer at the <a className="t4g" href="https://tech4good.soe.ucsc.edu/#/" target="_blank" rel="noreferrer">Tech4Good Lab</a>.</h6> */}
                      </div>
                    </div>
                </Tween>
              )}
            </Scene>
          </Controller>
        </section>
        <div id="intro-ends"></div>

        <section class="about-section">
          <div class="about-inner">
            <div class="about-component">
              <About/>
            </div>
            <div class="angle-border"></div>
          </div>
        </section>

        <section className='publications-section'>
          <Publications />
        </section>

        <section class="projects-section">
          <div class="projects-component">
            <Projects/>
          </div>
        </section>
      </div>
    )
  }
}

export default Home