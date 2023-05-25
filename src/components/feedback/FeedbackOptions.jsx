import clsx from "clsx";
import React from "react";

import css from 'components/feedback/Feedback.module.css'

// const FeedbackOptions = ({ options, onLeaveFeedback}) => (
//      <div className={clsx(css["buttons"])}>
//         <button type="button" onClick={onLeaveFeedback}>Good</button>
//         <button type="button" onClick={onLeaveFeedback}>Neutral</button>
//         <button type="button" onClick={onLeaveFeedback}>Bad</button>
//     </div>

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
    <div className={clsx(css["buttons"])}>
        <button type="button" onClick={onGood}>Good</button>
        <button type="button" onClick={onNeutral}>Neutral</button>
        <button type="button" onClick={onBad}>Bad</button>
    </div>

)

export default FeedbackOptions;

// Statistics.propTypes = {
//     title: PropTypes.string,

//     stats: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         label: PropTypes.string.isRequired,
//         percentage: PropTypes.number.isRequired,
//     })).isRequired,
// }
