import React, { useState } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Section from "../Section/Section";
import Container from "../Container/Container";
import Notification from "../Notification/Notification";

function App() {
  const [good, setDood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const optionsArr = { good, neutral, bad };
  const totalFeedback = good + neutral + bad;
  const isFeedBack = good > 0 || neutral > 0 || bad > 0;

  const leaveFeedback = (options) => {
    switch (options) {
      case "good":
        setDood(good + 1);
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
  };

  return (
    <Container>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={Object.keys(optionsArr)}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title={"Statistics"}>
        {isFeedBack ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={((good / totalFeedback) * 100).toFixed()}
          />
        ) : (
          <Notification message={"No feedback given"} />
        )}
      </Section>
    </Container>
  );
}

export default App;
