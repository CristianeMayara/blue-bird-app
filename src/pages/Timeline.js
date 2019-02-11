import React, { Component } from 'react';
import api from '../service/api';

import twitterLogo from '../twitter.svg';
import './Timeline.css';

export default class Timeline extends Component {
  state = {
    tweets: [],
    newTweet: ''
  };

  async componentDidMount() {
    const response = await api.get('tweets');
    this.setState({ tweets: response.data });
  }

  handleNewTweet = async e => {
    if (e.keyCode !== 13) return;

    const content = this.state.newTweet;
    const author = localStorage.getItem('@MyTwitter:username');

    await api.post('tweets', { content, author });

    this.setState({ newTweet: '' });
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

        {this.state.tweets.map(tweet => <h1>{tweet.content}</h1>)}
      </div>
    );
  }
}
