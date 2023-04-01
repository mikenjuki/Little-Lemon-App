import React from "react";
import Button from "./Button";

const CTA = () => (
  <section id="cta" className="bg-LemonBeige">
    <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
      <h2 className="text-5xl font-bold leading-tight text-center text-LemonGreen md:text-4xl md:max-w-xl md:text-left">
      Indulge your taste buds today!
      </h2>

      <div className="my-16">
       <Button>Book Reservation</Button>
      </div>
    </div>
  </section>
);

export default CTA;
