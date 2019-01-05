import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Panel from '../Panel';
import './styles.css';

class EventList extends React.Component {
	render() {
		let listEventsJsx = [];

		if (this.props.event) {
			console.log('Helloooo');
			let events = this.props.event.events;
			// let listEvents = []
			// while (events.length !== 0) {
			//   let arr = [...events.splice(0, 3)]
			//   arr = arr.filter(a => a !== undefined)
			//   listEvents.push(arr)
			// }

			// const listEventsLength = listEvents.length

			listEventsJsx = events.map(event => {
				return (
					<li className="uk-width-3-4" key={event.id}>
						<Panel event={event} />
					</li>
				);
			});
		}
		return (
			<Fragment>
				<div
					uk-slider="finite: true,autoplay: true, autoplay-interval: 1500ms"
					className="uk-light"
					style={{ width: '100%' }}
				>
					<ul className="uk-slider-items uk-grid">{listEventsJsx}</ul>
					<div className="uk-light">
						<a
							id="slider-arrow-left"
							uk-icon="icon: chevron-left; ratio: 2"
							class="uk-slidenav-medium uk-position-center-left"
							href="#"
							uk-slidenav-previous
							uk-slider-item="previous"
						/>
						<a
							id="slider-arrow-right"
							uk-icon="icon: chevron-right; ratio: 2"
							class="uk-slidenav-medium uk-position-center-right"
							href="#"
							uk-slidenav-next
							uk-slider-item="next"
						/>
					</div>
					<ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin" />
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		event: state.event
	};
};

export default connect(mapStateToProps)(EventList);
