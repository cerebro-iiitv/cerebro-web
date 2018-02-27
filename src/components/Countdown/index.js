import React, { Component } from 'react';

import heroImage from './cerebro-hero.png';
import './style.css';

class Countdown extends Component {
	render() {
		return(
			<div className="countdown">
        <img className={'uk-margin-large-bottom cerebro-hero'} src={heroImage} />
        <hr style={{width: '260px'}}/>
				<span className="countdown-header">STARTS IN</span>
				<div className="uk-grid-small uk-child-width-auto timer" uk-grid="true"
             uk-countdown="date: 2018-03-10T09:00:00+05:30">
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
			</div>
		)
	}
}

export default Countdown;
