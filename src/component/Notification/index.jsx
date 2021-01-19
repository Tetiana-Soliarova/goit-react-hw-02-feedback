import React from 'react';
import PropTypes from 'prop-types';
import styles from './notification.module.css'

const Notification = ({ message }) => {
  return (
    <div>
          <p className={styles.message}>{message}</p>
    </div>
  );
};

Notification.defaultProp = {
  message: '',
};
Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;