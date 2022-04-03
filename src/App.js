import { useState } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import s from './App.module.css';

function App() {
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);

const onLeaveFeedback = (option) => {
  switch (option) {
    case "good":
      setGood(good + 1);
      break;
    case "neutral":
      setNeutral(neutral + 1);
      break;
    case "bad":
      setBad(bad + 1);
      break;
    default:
      return;
}
}

const countTotalFeedback = () => {
  const total = good + neutral + bad;
  return total;
}

 const countPositiveFeedbackPercentage = () => {
  const positiveFeedbackPercentage = Math.round((good / countTotalFeedback()) * 100);
  return positiveFeedbackPercentage;
}

return (
  <div className={s.section}>
    <Section title="Please leave feedback">
      <FeedbackOptions
      options = {['good', 'neutral', 'bad']}
      onLeaveFeedback = {onLeaveFeedback}
      />
    </Section>
    <Section title="Statistics">
      {countTotalFeedback() ?
        (<Statistics
          good = {good}
          neutral = {neutral}
          bad = {bad}
          total = {countTotalFeedback()}
          positivePercentage = {countPositiveFeedbackPercentage()}
      />) : (<Notification message = "There is no feedback"/>)
      }
    </Section>
  </div>
)
}

export default App;
