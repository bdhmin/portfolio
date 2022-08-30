import React, { Component } from 'react';
import './background.scss';

class Background extends Component {
  render() {
    return (
      <div className='background'>
        <div className='body'>
          <h2>Background</h2>

          <h3>Skills</h3>
          <h4>Frontend Technologies</h4>
          <p>Angular, React, Next.js, Express, Redux, NgRx, Tailwind</p>

          <h4>Backend Technologies</h4>
          <p>Firebase, Flask, MongoDB, mySQL, Spring</p>

          <h4>Mobile Development</h4>
          <p>Xcode, Swift</p>



          <h3>Education</h3>
          <h4>Preschool</h4>
          <p>I attended a preschool in Seoul, South Korea. It was a foreign preschool for English speaking students who lived in Korea.</p>

          <h4>Kindergarten ~ 8th Grade</h4>
          <h5>Yongsan International School of Seoul</h5>
          <p>I attended Yongsan International School of Seoul (YISS) in Seoul, South Korea. At YISS, I discovered the creative power of Adobe tools. I was exposed to and made many projects with Photoshop, Illustrator, Lightroom, After Effects, and Premiere Pro. With the skills I gained, I was able to more freely express my creativity. I also developed a passion for logic and programming as I began to build projects on Scratch and Python.</p>

          <h4>High School</h4>
          <h5>San Domenico Upper School</h5>
          <p>I attended San Domenico school in San Anselmo, California. I returned to the place I was born in and grew up until the age of five in the North Bay of California. In the Marin County, I was able to explore the Bay Area cities and meet new friends. In high school, I learned C and C++ and expanded my creative skillset my newly found hobby photography.</p>

          <h4>Undergraduate</h4>
          <h5>UC Santa Cruz</h5>
          <p>I attended UC Santa Cruz during my first two years of college as a Computer Engineering major. At UC Santa Cruz, I joined the Tech4Good Lab. In this lab, I took a huge leap up in experience and skill level as a developer and discovered my passion for computing education and computer-assisted learning platforms. I continued my time in this lab as stepped up to become a lead developer mentoring and teaching new students frontend development with Angular.</p>

          <h5>UC San Diego</h5>
          <p>I Transferred to UC San Diego to continue my undergraduate education now as a computer science major. At UC San Diego, I discovered a great community in the CS Education field, getting to know professors and postdocs studying identity, imposter syndrome, and inclusion in the CS academic community.</p>
        </div>
      </div>
    )
  }
}

export default Background;