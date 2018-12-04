import React, {Component} from 'react';
import './style.css';

class Countdown extends Component {
  handleStartClick() {
    document.querySelector('.event-list').scrollIntoView(true);
  }
  render() {
    return (
      <div className="countdown">
        <img className={'uk-margin-large-bottom cerebro-hero'} src='./fest-logo.png' alt=""/>
        {/*<hr style={{width: '260px'}}/>
        <span className="countdown-header">LIVE NOW</span>*/}
        <div className="uk-grid-small uk-child-width-auto timer" uk-grid="true"
             uk-countdown="date: 2019-03-02T09:00:00+05:30">
          <div>
            <div className="uk-countdown-number uk-countdown-days"></div>
            <div className="uk-countdown-label uk-text-center uk-visible@s">DAYS</div>
          </div>
          <div className="uk-countdown-separator">:</div>
          <div>
            <div className="uk-countdown-number uk-countdown-hours"></div>
            <div className="uk-countdown-label uk-text-center uk-visible@s">HRS</div>
          </div>
          <div className="uk-countdown-separator">:</div>
          <div>
            <div className="uk-countdown-number uk-countdown-minutes"></div>
            <div className="uk-countdown-label uk-text-center uk-visible@s">MINS</div>
          </div>
          <div className="uk-countdown-separator">:</div>
          <div>
            <div className="uk-countdown-number uk-countdown-seconds"></div>
            <div className="uk-countdown-label uk-text-center uk-visible@s">SECS</div>
          </div>
        </div>
        {/* <div className="next-year">SEE YOU NEXT YEAR!</div> */}
      </div>
    )
  }
}

export default Countdown;
