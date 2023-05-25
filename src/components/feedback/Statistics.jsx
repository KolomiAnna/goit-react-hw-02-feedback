import React from "react";
import clsx from "clsx";

import css from 'components/feedback/Feedback.module.css'

const Statistics = ({ onStateGood, onStateNeutral, onStateBad, onStateTotal, onStatePositiveFeed }) => (
    <div className={clsx(css["results"])}>
        <span>Good: {onStateGood}</span>
        <span>Neutral: {onStateNeutral}</span>
        <span>Bad: {onStateBad}</span>

        <span>Total: {onStateTotal}</span>
        <span>Positive feedback: {onStatePositiveFeed}%</span>
    </div>
)





export default Statistics;

