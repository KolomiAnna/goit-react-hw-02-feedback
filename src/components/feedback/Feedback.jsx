import React from "react";
// import clsx from "clsx";

// import css from 'components/feedback/Feedback.module.css';

import FeedbackOptions from "components/feedback/FeedbackOptions";
import Statistics from "components/feedback/Statistics";
import Section from "components/feedback/Section";
import Notification from "components/feedback/Notification";

class Feedback extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handlChangeState = (event) => {
        const feedbackKey = event.target.innerText.toLowerCase();
        this.setState(prevState => {
            return {[feedbackKey] : prevState[feedbackKey] + 1}
        })
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedback = () => {
        const { good } = this.state;
            return Math.round(100 * good / this.countTotalFeedback());
    }

            
    render() {
        const { good, neutral, bad } = this.state;

        return (
            <div>
                <Section title="Please leave feedback"
                    children={<FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.handlChangeState}
                    />}
                />
                <Section title="Statistics"
                    children={this.countTotalFeedback()
                        ? (<Statistics
                            onStateGood={good}
                            onStateNeutral={neutral}
                            onStateBad={bad}
                            onStateTotal={this.countTotalFeedback()}
                            onStatePositiveFeed={this.countPositiveFeedback()}
                        />)
                        : (<Notification message="There is no feedback" />)
                    }
                />
            </div>
        );
    }
}

export default Feedback;



