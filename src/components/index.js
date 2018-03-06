import React from 'react';
import {connect} from 'react-redux';
import Particles from 'react-particles-js';

import Countdown from './Countdown';
import EventList from './eventList';

class Home extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0;
  }
  render() {
    return <div>
      {/*<img className="absolute triangle" src="https://firebasestorage.googleapis.com/v0/b/cerebro-2018-f1052.appspot.com/o/triangle.png?alt=media&token=f3cbbbed-2d31-4201-a051-8d123d594156" alt=""/>*/}
      {/*<img className="absolute square" src="https://firebasestorage.googleapis.com/v0/b/cerebro-2018-f1052.appspot.com/o/square.png?alt=media&token=8979df90-1eaf-466e-9ef9-94546eec3e90" alt=""/>*/}
      {/*<div className={'absolute triangle'}/>*/}
      {/*<div className={'absolute square'} />*/}
      <Countdown/>
      <Particles params={{
        "particles": {
          "number": {
            "value": 160,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.4,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 4,
              "size_min": 0.3,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 600
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 250,
              "size": 0,
              "duration": 2,
              "opacity": 0,
              "speed": 3
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }}/>
      <EventList/>
    </div>
  }
}

export default connect()(Home);
