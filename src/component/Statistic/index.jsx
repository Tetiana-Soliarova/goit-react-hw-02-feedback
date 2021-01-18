import React from "react";
import PropTypes from "prop-types";
import styles from "./statistic.module.css";

const Statistics = ({ good, bad, neutral, total }) => {
  return (
    <div>
      <h2 className={styles.title}>Statistics</h2>

      <ul className={styles.list}>
        <li>
          <span className={styles.statistic}>Good: {good}</span>
        </li>
        <li>
          <span className={styles.statistic}>Neutral: {neutral}</span>
        </li>
        <li>
          <span className={styles.statistic}>Bad: {bad} </span>
        </li>
        <li>
          <span className={styles.statistic}> Total: {total}</span>
        </li>
      </ul>
    </div>
  );
}; 

Statistics.defaultProp = {
  total: 0,
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
};

export default Statistics;
