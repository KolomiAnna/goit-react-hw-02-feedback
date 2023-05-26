import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import css from 'components/feedback/Feedback.module.css'

const Statistics = ({ onStateGood, onStateNeutral, onStateBad, onStateTotal, onStatePositiveFeed }) => (
    (onStateGood !== 0 || onStateNeutral !== 0 || onStateBad !== 0) && (
    <div className={clsx(css["results"])}>
        <span>Good: {onStateGood}</span>
        <span>Neutral: {onStateNeutral}</span>
        <span>Bad: {onStateBad}</span>
        <span>Total: {onStateTotal}</span>
        {onStateGood !== 0 && (
            <span>Positive feedback: {onStatePositiveFeed} %</span>
            )} 
    </div>
    )

)

export default Statistics;

Statistics.propTypes = {
    onStateGood: PropTypes.number.isRequired,
    onStateNeutral: PropTypes.number.isRequired,
    onStateBad: PropTypes.number.isRequired,
    onStateTotal: PropTypes.number.isRequired,
    onStatePositiveFeed: PropTypes.number.isRequired,
}