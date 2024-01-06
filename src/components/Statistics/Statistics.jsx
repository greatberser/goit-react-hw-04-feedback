import css from './Statistics.module.css';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={`${css.statistics}`}>
      <Notification countTotalFeedback={total} text="There is no feedback">
        <span className={`${css.statisticsSpan}`}>Good: {good}</span>
        <span className={`${css.statisticsSpan}`}>Neutral: {neutral}</span>
        <span className={`${css.statisticsSpan}`}>Bad: {bad}</span>
        <span className={`${css.totalCount}`}>Total: {`${total}`}</span>
        <span className={`${css.feedbackPercentage}`}>
          Positive feedback: {`${positivePercentage} %`}
        </span>
      </Notification>
    </div>
  );
};