import PropTypes from 'prop-types';
import styles from '../FeedbackOptions/feedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.buttonWrapper}>
      {options.map((option, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={onLeaveFeedback}
            name={option}
            className={styles.optionBtn}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
