import React from "react";
// import clsx from "clsx";

// import css from 'components/feedback/Feedback.module.css';

// import FeedbackOptions from "components/feedback/FeedbackOptions";
// import Statistics from "components/feedback/Statistics";
// import Section from "components/feedback/Section";
// import Notification from "components/feedback/Notification";

class Feedback extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    }

    handleNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    }

    handleBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
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
                        onGood={this.handleGood}
                        onNeutral={this.handleNeutral}
                        onBad={this.handleBad}
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





    // handlChangeState = () => {
    //     this.setState(prevState => {
            // console.log(prevState);
            // console.log(Object.entries(prevState));
            // console.log(Object.keys(prevState));
            // console.log(Object.values(prevState));

            // const arrayKeys = Object.keys(prevState);
            // const arrayValue = Object.values(prevState);

            // console.log(arrayValue);
            // for (let key of arrayKeys) {
            //     console.log(key);
            //     console.log(arrayKeys);
            // }
           
            // for (let value of arrayValue) {
            //     console.log(value);
            //     console.log(arrayValue);
            // }})}





