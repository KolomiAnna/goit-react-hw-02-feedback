import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";

import css from 'components/feedback/Feedback.module.css'

const FeedbackOptions = ({  options, onLeaveFeedback }) => (
    <div className={clsx(css["buttons"])}>
        {options.map((option) =>
            <button key={option} type="button" onClick={onLeaveFeedback}>{option}</button>)}
    </div>
)

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
