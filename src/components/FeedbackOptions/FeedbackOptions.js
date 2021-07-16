import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.scss";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={s.wrapper}>
    {options.map((option) => (
      <button
        className={`${s.feedbackButton} ${s[option]}`}
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.string,
      neutral: PropTypes.string,
      bad: PropTypes.string,
    })
  ),
};

export default FeedbackOptions;
