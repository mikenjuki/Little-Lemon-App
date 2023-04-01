import React from "react";
import { feedback } from "../constants";
import TestimonialCard from "./TestimonialCard";
import styles from "../styles";

const Testimonials = () => (
  <section>
    <div>
      <h2 className={`${styles.heading2} ${styles.flexCenter} font-Markazi`}>
        Testimonials
      </h2>
    </div>

    <div
      className={`${styles.flexCenter} ${styles.padding}  flex-col sm:flex-row flex-wrap`}
    >
      {feedback.map((card) => {
        return <TestimonialCard key={card.id} {...card} />;
      })}
    </div>
  </section>
);

export default Testimonials;
