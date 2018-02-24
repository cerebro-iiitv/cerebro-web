import React, { Component } from 'react';

class Countdown extends Component {
	render() {
		return(
			<div className="countdown">
				<h1 className="countdown-header">It begins in - </h1>
				<div class="uk-grid-small uk-child-width-auto timer" uk-grid uk-countdown="date: 2018-03-09T05:07:04+00:00">
					<div>
						<div class="uk-countdown-number uk-countdown-days"></div>
						<div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Days</div>
					</div>
					<div class="uk-countdown-separator">:</div>
					<div>
						<div class="uk-countdown-number uk-countdown-hours"></div>
						<div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Hours</div>
					</div>
					<div class="uk-countdown-separator">:</div>
					<div>
						<div class="uk-countdown-number uk-countdown-minutes"></div>
						<div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Minutes</div>
					</div>
					<div class="uk-countdown-separator">:</div>
					<div>
						<div class="uk-countdown-number uk-countdown-seconds"></div>
						<div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Seconds</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Countdown;