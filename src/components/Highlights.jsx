import React from "react";
import styles, { layout } from "../styles";
import Button from "./Button";
import { specialMeals } from "../constants";
import SpecialMealCard from "./SpecialMealCard";

const Highlights = () => (
  <section className={`flex flex-col ${styles.paddingY}`}>
    <div
      className={`${styles.flexCenter} ${styles.paddingX} flex-col sm:flex-row ss:justify-between`}
    >
      <h2 className={`${styles.heading2} font-Markazi`}>
        This weeks specials!
      </h2>
      <Button>Online menu</Button>
    </div>

    <div className="flex flex-wrap flex-col items-center sm:flex-row lg:flex-nowrap justify-center w-full">
      {specialMeals.map((card) => {
        return <SpecialMealCard key={card.id} {...card} />;
      })}
    </div>
  </section>
);

export default Highlights;
