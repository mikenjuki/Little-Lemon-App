import React from "react";
import styles from "../styles";
import { Hero, Highlights, Testimonials, About, CTA } from "../components";

const Home = () => (
  <section>
    <div className={`bg-primary ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={` bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Highlights />
        <Testimonials />
        <About />
        {/* Add a cta although not on the design to prompt users to order online refer to three-c project */}
        <CTA />
      </div>
    </div>
  </section>
);

export default Home;
