import React from 'react';
import { connect } from 'react-redux';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';

class Timeline extends React.Component {
	componentDidMount() {
		document.body.scrollTop = 0;
	}
	render() {
		let events = this.props.event.events.slice();
		events.sort((a, b) => Date.parse(a['start-time']) - Date.parse(b['start-time']));
		return (
			<div>
				<h3 className="tl-title">TIMELINE</h3>
				<VerticalTimeline>
					{events.map(event => (
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							date={event['start-time']}
							iconStyle={{ background: '#FF6E2C', border: 0 }}
							key={event.id}
						>
							<div
								className="vertical-timeline-element-title"
								onClick={() => this.props.history.push('/events/' + event.id)}
							>
								{event.name}
							</div>
							<div
								className="vertical-timeline-element-subtitle faded"
								onClick={() => this.props.history.push('/events/' + event.id)}
							>
								Team of {event['team-size']}
							</div>
							<p onClick={() => this.props.history.push('/events/' + event.id)}>{event.description}</p>
						</VerticalTimelineElement>
					))}
				</VerticalTimeline>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		event: state.event
	};
};

export default connect(mapStateToProps)(Timeline);
