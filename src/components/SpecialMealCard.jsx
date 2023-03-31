import React from "react";
import styles from "../styles";

const SpecialMealCard = ({ image, title, price, content, orderTag, icon }) => (
  <div className="flex flex-col rounded-[20px] max-w-[300px] mr-0 sm:mr-5 my-8 md:mr-10 bg-lime-50 overflow-clip">
    <img
      src={image}
      alt={`${title} image`}
      className="w-[300px] h-[200px] object-cover"
    />

    <div className="px-6 mb-5">
      <div
        className={`${styles.flexCenter} flex-row flex-1 justify-between mt-2`}
      >
        <h4 className=" font-Markazi font-semibold text-[24px] text-black">
          {title}
        </h4>
        <p className="font-Markazi font-normal text-LemonCoral text-[18px] leading-[32px] text-left">
          {`$ ${price}`}
        </p>
      </div>
      <p className="font-Karla font-normal text-black my-5 text-[18px] leading-[32px] w-full">
        {content}
      </p>
      <div className="flex flex-1 flex-row items-center">
        <p className=" font-Karla font-bold text-[16px] mr-4">{orderTag}</p>
        <img
          src={icon}
          alt={`Delivery Icon`}
          className="w-[27px] h-[27px] object-contain"
        />
      </div>
    </div>
  </div>
);

export default SpecialMealCard;

// flex flex-row flex-1 justify-center items-start
