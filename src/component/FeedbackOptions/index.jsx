import React from "react";
import PropTypes from 'prop-types';
import styles from "./styles.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const { good, neutral, bad } = options;
  return (
    <div>
      <button
        type="button"
        name={good}
        className={styles.button}
        onClick={() => onLeaveFeedback("good")}
      >
        Good
      </button>
      <button
        type="button"
        name={neutral}
        className={styles.button}
        onClick={() => onLeaveFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        name={bad}
        type="button"
        className={styles.button}
        onClick={() => onLeaveFeedback("bad")}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propType = {
  options: PropTypes.number.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions;

