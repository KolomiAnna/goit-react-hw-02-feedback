import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import css from 'components/feedback/Feedback.module.css'


const Section = ({ title, children }) => (
    <section>
        <h2 className={clsx(css["title"])}>{title}</h2>
        {children}
    </section>
)

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
};