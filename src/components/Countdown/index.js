import React, { Component } from 'react';

class Countdown extends Component {
	render() {
		return(
			<div className="countdown">
				<h1 className="countdown-header">It begins in - </h1>
				<div className="uk-grid-small uk-child-width-auto timer" uk-grid="true" uk-countdown="date: 2018-03-09T05:07:04+00:00">
					<div>
						<div className="uk-countdown-number uk-countdown-days"></div>
						<div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Days</div>
					</div>
					<div className="uk-countdown-separator">:</div>
					<div>
						<div className="uk-countdown-number uk-countdown-hours"></div>
						<div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Hours</div>
					</div>
					<div className="uk-countdown-separator">:</div>
					<div>
						<div className="uk-countdown-number uk-countdown-minutes"></div>
						<div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Minutes</div>
					</div>
					<div className="uk-countdown-separator">:</div>
					<div>
						<div className="uk-countdown-number uk-countdown-seconds"></div>
						<div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Seconds</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Countdown;
