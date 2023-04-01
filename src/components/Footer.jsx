import React from "react";
import styles from "../styles";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} flex-col w-full mb-8 md:flex-row`}>
      <div className="flex flex-col flex-1 justify-start mr-10">
        <img
          src={logo}
          alt="Little lemon logo"
          className="h-[72px] w-[180px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          Tasty and Traditional
        </p>
      </div>

      <div className="flex flex-row flex-[1.5] flex-wrap justify-between w-full mt-10 md:mt-0">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key}
            className="flex flex-col my-4 min-w-[150px] ss:my-0"
          >
            <h4
              className={`font-main font-bold text-[20px] leading-[24px] text-LemonGreen`}
            >
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4 ">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-main font-normal text-base leading-[24px] text-dimWhite cursor-pointer hover:text-secondary
                   ${index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"}`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center flex-col pt-6 md:flex-row border-t-[1px] border-t-[#3f3e45] ">
      <p
        className={`font-main font-normal text-center text-[18px] leading-[24px] text-black`}
      >
        Copyright &copy; 2021 HooBank. All Rights Reserved.
      </p>
      <div className="flex flex-row mt-6 md:mt-0">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer
             ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
