import React from "react";
import styles from "../styles";
import { food01 } from "../assets";
import Button from "./Button";

const Hero = () => (
  <section className={`flex flex-col md:flex-row ${styles.paddingY}`}>
    <div className={`flex flex-col flex-1 ${styles.flexStart}`}>
      <h1 className="text-[52px] font-semibold font-Markazi h-14 ss:h-20 ss:text-[72px] leading-[75px] ss:leading-[100px] ">
        Little Lemon
      </h1>
      <h3 className="text-4xl font-Markazi sm:pb-3">Chicago</h3>
      <p
        className={`${styles.paragraph} mt-2 max-w-[516px] font-normal sm:text-2xl text-gray-500`}
      >
        We are a family owned Mediterranean restaurant focused on traditional
        recipes served with a modern twist.
      </p>
      <Button styles={`mt-2 btn-p-color`}>Reserve a Table</Button>
    </div>

    <div className={`${styles.flexCenter} flex flex-1 my-10 md:my-0`}>
      <img
        className="rounded-lg shadow-xl h-80 w-full object-cover object-center ss:h-96"
        src={food01}
        alt="Little lemon seafood special"
      />
    </div>
  </section>
);

export default Hero;
