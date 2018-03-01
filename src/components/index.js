import React from 'react';
import {connect} from 'react-redux';
import Particles from 'react-particles-js';

import Countdown from './Countdown';
import EventList from './eventList';

class Home extends React.Component {
  render() {
    return <div>
      {/*<img className="absolute triangle" src="https://firebasestorage.googleapis.com/v0/b/cerebro-2018-f1052.appspot.com/o/triangle.png?alt=media&token=f3cbbbed-2d31-4201-a051-8d123d594156" alt=""/>*/}
      {/*<img className="absolute square" src="https://firebasestorage.googleapis.com/v0/b/cerebro-2018-f1052.appspot.com/o/square.png?alt=media&token=8979df90-1eaf-466e-9ef9-94546eec3e90" alt=""/>*/}
      {/*<div className={'absolute triangle'}/>*/}
      {/*<div className={'absolute square'} />*/}
      <Countdown/>
      <Particles params={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800
            }
          },
          line_linked: {
            shadow: {
              enable: true,
              color: '#FF6E2C',
              blur: 5
            }
          },
          "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 10,
              "opacity_min": 0.1,
              "sync": false
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 800,
              "line_linked": {
                "opacity": 1
              }
            },
            "repulse": {
              "distance": 40,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
          }
        },
        "retina_detect": true
      }}/>
      <EventList/>
    </div>
  }
}

export default connect()(Home);
