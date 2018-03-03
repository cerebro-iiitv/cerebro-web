import React from 'react';
import {connect} from 'react-redux';

import Team from '../team';
import './styles.css';

class About extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0;
  }
  render() {
    return <div className={'uk-container'}>
      <div className={'uk-margin-large-top'}>
        <div className={'about-title'}>About Fest</div>
        <p><span className={'primary-color'}>Indian Institution of Information Technology, Vadodara</span> (IIIT-V) is
          one of the newly formed IIIT by the Ministry of Human Resource Development (<span
            className={'primary-color'}>MHRD</span>) , Government of India under Public Private Partnership (PPP) model.
          The partners in this project are Government of India, Government of Gujarat, Gujarat Energy Research and
          Management Institute, Gujarat State Fertilizers and Chemicals Ltd. and Tata Consultancy Services.</p>
        <p><span className={'primary-color'}>Cerebro</span> is the <span className={'primary-color'}>Annual Technical Festival</span> of
          Indian Institute of Information Technology, Vadodara held in <span className={'primary-color'}>March</span>.
          It is entirely organized by the <span className={'primary-color'}>Technical Society of IIIT, Vadodara</span> and
          serves as a platform for technophiles to showcase their creativity and intelligence. The festival aims to
          bring together great minds through various activities like <span className={'primary-color'}>Technical Workshops, events, talks</span> and <span
            className={'primary-color'}>exhibitions</span>.</p>
      </div>
      <div className={'uk-margin-large-top'}>
        <div className={'about-title'}>Team</div>
        {this.props.team.map((team, idx) => <Team key={idx} team={team}/>)}
      </div>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    team: state.team.team
  }
};

export default connect(mapStateToProps)(About);
