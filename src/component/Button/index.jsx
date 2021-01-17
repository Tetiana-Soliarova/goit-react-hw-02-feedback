import React from "react";
//import PropTypes from 'prop-types';
import styles from "./styles.module.css";

const SectionsButton = ({ good, neutral, bad}) => {
  return (
    <div>
      <button type="button" className={styles.button} onClick={good}>
        Good
      </button>
      <button type="button" className={styles.button} onClick={neutral}>
        Neutral
      </button>
      <button type="button" className={styles.button} onClick={bad}>
        Bad
      </button>
    </div>
  );
};

/*SectionsButton.defaultProp = {
    good: 0,
    neutral: 0,
    bad:0,
}

SectionsButton.propTypes = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.number,
};
*/
export default SectionsButton;
//
