import React from "react";
import clsx from "clsx";

import css from 'components/feedback/Feedback.module.css'


const Section = ({ title, children }) => (
    <section className={clsx(css["r"])}>
        <h2 className={clsx(css["title"])}>{title}</h2>
        {children}
    </section>
)



export default Section;

