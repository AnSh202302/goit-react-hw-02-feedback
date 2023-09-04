import { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  hendleNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  hendleBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    let positiveFeedback = Math.round(
      (100 * this.state.good) / this.countTotalFeedback()
    );
    return positiveFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      hendleGood,
      hendleNeutral,
      hendleBad,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGood={hendleGood}
            onNeutral={hendleNeutral}
            onBad={hendleBad}
          />
        </Section>

        {good || neutral || bad ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}

export default App;
