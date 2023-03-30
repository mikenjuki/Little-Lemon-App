import React from "react";
import styles from "./styles";

const App = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

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
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
