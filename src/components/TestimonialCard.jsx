import React from "react";
import styles from "../styles";

const TestimonialCard = ({ id, content, name, img }) => (
  <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-LemonGreen md:w-1/3 my-8 mx-4 text-white">
    <img src={img} alt={`${id}`} className="w-16 -mt-14" />
    <h5 className="text-lg font-bold font-Karla">{name}</h5>
    <p className="text-sm font-Karla">{content}</p>
  </div>
);

export default TestimonialCard;
