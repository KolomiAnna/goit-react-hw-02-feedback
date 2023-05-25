import React from "react";
import clsx from "clsx";

import css from 'components/feedback/Feedback.module.css'

import FeedbackOptions from "components/feedback/FeedbackOptions";
import Statistics from "components/feedback/Statistics";
import Section from "components/Section";


class Feedback extends React.Component {
    static defaultProps = {
    initialValue: 0,
}

 

    // static propTypes = {
    //     good: PropTypes.number,
    //     neutral: PropTypes.number,
    //     bad: PropTypes.number,
    // };

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
  

    // handlChangeState = () => {
    //     this.setState(prevState => {
    //         return {
    //             state.key: Object.value(prevState) + 1,
    //             };
    //     });
    // }

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

    // countTotalFeedback = () => {
    //     this.setState((good, neutral, bad) => ({
    //         total: good + neutral + bad,
    //     }));
    // }

    render() {
        const { good, neutral, bad } = this.state;

        let totalFeedback = good + neutral + bad;
        let positiveFeed = Math.round(100 * good / totalFeedback);

        return (
            <div>
                <Section
                    title="Please leave feedback">
               
                    <FeedbackOptions 
                        // options={Object.keys(this.state)}
                        // onLeaveFeedback = {this.handlChangeState}
                    onGood={this.handleGood}
                    onNeutral={this.handleNeutral}
                    onBad={this.handleBad}
                />
                
                <p className={clsx(css["title"])}>Statistics</p>
                <Statistics 
                    onStateGood={good}
                    onStateNeutral={neutral}
                    onStateBad={bad}
                    onStateTotal={totalFeedback}
                    onStatePositiveFeed={positiveFeed}
                />  
                </Section>
                </div>

        );
    }
}

export default Feedback;



// Feedback.propTypes = {
//     title: PropTypes.string,

//     stats: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         label: PropTypes.string.isRequired,
//         percentage: PropTypes.number.isRequired,
//     })).isRequired,
// }
