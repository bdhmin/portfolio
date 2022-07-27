import React, { Component } from 'react';
import './timeline.scss';

class Timeline extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="timeline">
        <div class="timeline-content">
          <h2>Timeline</h2>
          <Event
            title={'2009'}
            body={"Laid hands on an iPhone for the first time in my life, and fell in love with Apple's minimalistic priciples"}
            image={'https://www.nicepng.com/png/detail/258-2581866_iphone-3gs.png'}
          />
          <Event
            title={'2012'}
            body={'Created scripts on the macOS Script Editor to automatically build folders and and open desired windows'}
            image={'https://www.automatisez.net/img/icon-posts/scripts.png'}
          />
          <Event
            title={'2013'}
            body={'Learned Scratch, the block based programming language'}
            image={'https://scratch.mit.edu/images/scratch-og.png'}
          />
          <Event
            title={'2014'}
            body={'Build my first website with HTML/CSS'}
            image={'https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png'}
          />
          <Event
            title={'2018'}
            body={"Learned C and C++ through Harvard Professor David J. Malan's course CS50, and created projects in AP CS Principles"}
            image={'https://miro.medium.com/max/700/1*IYCifTCCR2ah-79u94Z3wg.png'}
          />
          <Event
            title={'2019'}
            body={'Began college as a Computer Engineering major at UC Santa Cruz, gained experience in Python and gained exposure to web and iOS development'}
            image={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/The_University_of_California_1868_UCSC.svg/1200px-The_University_of_California_1868_UCSC.svg.png'}
          />
          <Event
            title={'2020'}
            body={'Learned to develop iOS apps using SwiftUI and the iOS SDK'}
            image={'https://www.macworld.com/wp-content/uploads/2022/04/swift_1200home.jpg?quality=50&strip=all'}
          />
          <Event
            title={'January 2021'}
            body={'Joined the Tech4Good Lab, a lab centered on social computing research, as a web developer'}
            image={'https://avatars.githubusercontent.com/u/20049127?s=200&v=4'}
          />
          <Event
            title={'June 2021'}
            body={'Built my very own personal website'}
            image={''}
          />
          <Event
            title={'June 2021'}
            body={'Started the development of Annota, a qualitative analysis learning social app, under the Tech4Good Lab'}
            image={''}
          />
          <Event
            title={'September 2021'}
            body={'Transferred to UC San Diego as a Computer Science major'}
            image={'https://brand.ucsd.edu/_images/logos-and-brand-elements/additional-campus-logos/ucsd-seal.svg'}
          />
          <Event
            title={'April 2022'}
            body={'Won SD Hacks 2022 with Marathon, a social goal-tracking app'}
            image={'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/901/846/datas/gallery.jpg'}
          />
          <Event
            title={'June 2022'}
            body={'Started position as a Software Engineer intern at AT&T'}
            image={'https://pbs.twimg.com/profile_images/1416820139857567747/tPlI2eyP_400x400.jpg'}
          />
        </div>
      </div>
    )
  }
}

class Event extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="event">
        <h5>{this.props.title}</h5>
        <p>{this.props.body}</p>
        <img src={this.props.image} />
      </div>
    )
  }
}

export default Timeline;