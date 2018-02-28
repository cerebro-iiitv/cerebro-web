import React from 'react';

import './styles.css';

class About extends React.Component {
  render() {
    return <div className={'uk-container'}>
      <div className={'uk-margin-large-top'}>
        <div className={'about-title'}>About Fest</div>
        <p><span className={'primary-color'}>Indian Institution of Information Technology</span> Vadodara (IIIT-V) is one of the newly formed IIIT by the Ministry of Human Resource Development(<span className={'primary-color'}>MHRD</span>), Government of India under Public Private Partnership(PPP) model. The partners in this project are Government of India, Government of Gujarat, Gujarat Energy Research and Management Institute, Gujarat State Fertilizers and Chemicals and Tata Consultancy Services.</p>
        <p><span className={'primary-color'}>Cerebro</span> is the <span className={'primary-color'}>Annual Technical Festival</span> of Indian Institute of Information Technology, Vadodara held in <span className={'primary-color'}>March</span>. It is entirely organized by the <span className={'primary-color'}>Technical Society of IIIT</span>, Vadodara and services as a platform for technofiles to showcase their creativity and intelligence. The festival aims to bring together great minds through various activities like <span className={'primary-color'}>Technical Workshops, events, talks</span> and <span className={'primary-color'}>exhibitions</span>.</p>
      </div>
      <div className={'uk-margin-large-top'}>
        <div className={'about-title'}>Team</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea <span className={'primary-color'}>commodo consequat</span>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.</p>
      </div>
      <div className={'uk-margin-large-top'}>
        <div className={'about-title'}>Sponsors</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea <span className={'primary-color'}>commodo consequat</span>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.</p>
      </div>
    </div>
  }
}

export default About;
