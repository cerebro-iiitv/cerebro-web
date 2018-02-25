import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return(
      <nav class="uk-navbar-container uk-margin uk-dark uk-navbar-transparent" uk-navbar="mode: click">
        <div class="uk-navbar-center">

          <ul class="uk-navbar-nav">
            <li><a href="/">Timeline</a></li>
              <li>
                <a href="/">Events</a>
                <div class="uk-navbar-dropdown">
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li class="uk-active"><a href="/">Technical</a></li>
                    <li><a href="/">Fun</a></li>
                    <li><a href="/">Gaming</a></li>
                  </ul>
                </div>
              </li>
            <li><a href="/">About Cerebro</a></li>
          </ul>

        </div>
      </nav>
		)
	}
}

export default Navbar;
