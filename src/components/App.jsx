import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, num) => {
      return acc + num;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return (
      Math.round(
        (this.state.good /
          Object.values(this.state).reduce((acc, num) => {
            return acc + num;
          }, 0)) *
          100
      ) || '0'
    );
  };

  render() {
    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.counterFeedback}
        />

        <h2>Statistics</h2>
        {this.countTotalFeedback() ? (
          <Statistics
            {...this.state}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <p>There is no feedback</p>
        )}
      </Section>
    );
  }
}