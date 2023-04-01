import React from "react";
import styles from "./styles";
import { Navbar, Footer } from "./components";
import { Home, AboutUs, Login, Reservations, Menu, OrderOnline } from "./Pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/order-online" element={<OrderOnline />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </div>
        </div>

        <div className={` bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
