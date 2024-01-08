import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const counterFeedback = (option) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, num) => acc + num, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;
  };

  return (
    <Section title={'Please leave feedback'}>
      <FeedbackOptions options={feedback} onLeaveFeedback={counterFeedback} />

      <h2>Statistics</h2>
      {countTotalFeedback() ? (
        <Statistics
          {...feedback}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <p>There is no feedback</p>
      )}
    </Section>
  );
};

export default App;
