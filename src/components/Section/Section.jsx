import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className="container">
      {title && <h1 className={`${css.feedbackTitle}`}>{`${title}`}</h1>}

      {children}
    </div>
  );
};