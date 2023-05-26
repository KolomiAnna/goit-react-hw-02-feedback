import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";

import css from 'components/feedback/Feedback.module.css'

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
    <div className={clsx(css["buttons"])}>
        <button type="button" onClick={onGood}>Good</button>
        <button type="button" onClick={onNeutral}>Neutral</button>
        <button type="button" onClick={onBad}>Bad</button>
    </div>

)

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    onGood: PropTypes.func.isRequired,
    onNeutral: PropTypes.func.isRequired,
    onBad: PropTypes.func.isRequired,
}
