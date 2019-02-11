import React, { Component } from 'react';

import twitterLogo from '../twitter.svg';
import './Timeline.css';

export default class Timeline extends Component {
  state = {
    newTweet: ''
  };

  handleNewTweet = () => {

  }

  handleInputChange = e => {
    this.setState({ newTweet: e.target.value });
  }

  render() {
    return (
      <div className="timeline-wrapper">
        <img height={24} src={twitterLogo} alt="MyTwitter" />

        <form>
          <textarea
            value={this.state.newTweet}
            onKeyDown={this.handleNewTweet}
            onChange={this.handleInputChange}
            placeholder='O que está acontecendo?' />
        </form>
      </div>
    );
  }
}
