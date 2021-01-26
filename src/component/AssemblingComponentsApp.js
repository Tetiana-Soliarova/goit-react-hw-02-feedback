import { Component } from 'react'
import styles from './styles.module.css'
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics'
import Notification from './Notification'

class AssemblingComponentsApp extends Component {
  static defaultProp = {
    total: 0,
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  increase = (options) => {
    this.setState((prevState) => {
      return {
        [options]: prevState[options] + 1,
      }
    })
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0)
  }

  countPositiveFeedbackPercentage = () => {
    const positiveFeetback = +(
      (this.state.good / this.countTotalFeedback()) *
      100
    ).toFixed()
    return positiveFeetback > 0 ? positiveFeetback : 0
  }

  render() {
    let total = this.countTotalFeedback()
    let positivePercentage = this.countPositiveFeedbackPercentage()

    
    return (
      <>
        <FeedbackOptions options={this.state} onLeaveFeedback={this.increase} />
        <h2 className={styles.title}>Statistics</h2>

        {total > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            feedback={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    )
  }
}
export default AssemblingComponentsApp
