import React from "react";
import styles from "../styles";
import { marioAdrian01, marioAdrian02 } from "../assets";

const About = () => (
  <section
    className={`flex flex-col md:flex-row ${styles.paddingY} items-center`}
  >
    <div className={`flex flex-col flex-1 ${styles.flexStart} mr-1`}>
      <h2 className="text-[30px] font-semibold font-Markazi h-14 ss:h-20 ss:text-[50px] leading-[75px] ss:leading-[100px] ">
        About The Little Lemon
      </h2>
      <h3 className="text-3xl font-Markazi sm:pb-3">Chicago</h3>
      <p
        className={`${styles.paragraph} mt-2 max-w-[516px] font-normal sm:text-lg text-gray-500`}
      >
        Little Lemon is a family-owned Mediterranean restaurant that brings the
        flavors of the Mediterranean to your table. Our dishes are inspired by
        traditional recipes that have been passed down through generations, but
        we add our own unique twist to create something truly special. Our
        founders, Adrian and Mario, have created a warm and inviting atmosphere
        where you can enjoy delicious food and great company. Come visit us
        today and experience the best of Mediterranean cuisine!
      </p>
    </div>
    <div
      className={`${styles.flexCenter} flex flex-1 my-10 md:my-0 relative pt-8 ss:pt-0 w-full`}
    >
      <img
        src={marioAdrian01}
        alt="Founders image"
        className="h-[400px] w-[300px] object-cover hidden md:block object-center absolute left-0 -bottom-30 z-[2]"
      />
      <img
        src={marioAdrian02}
        alt="Founders image"
        className="h-[300px] w-[400px] object-cover md:absolute md:right-10 md:-top-13"
      />
    </div>
  </section>
);

export default About;
