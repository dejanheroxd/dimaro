import React, { useState } from "react";
import shrimpGround from "../../../assets/shrimp.jpg";
import Navbar from "../../../components/navbar/Navbar";
import Contact from "../../contact/Contact";

export default function LandingPage({ contactPop, openPopUp, closePopUp }) {
  return (
    <div className="h-screen relative">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          backgroundImage: `url(${shrimpGround})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "brightness(0.68)",
        }}
      />
      <Navbar openPopUp={openPopUp} />
      {contactPop && <Contact closePopUp={closePopUp} />}
      <div
        id="section1"
        className="absolute h-screen flex-col inset-0 flex justify-center items-center"
      >
        <header className="text-white lg:flex lg:flex-col lg:justify-center lg:items-center text-center relative  w-[320px] font-bold">
          <p className="relative text-4xl sm:text-6xl md:text-7xl lg:mt-3 lg:hidden">
            QUALITY
          </p>
          <p className="text-8xl mt-4 hidden lg:block lg:w-[800px] xl:text-8xl xl:w-[900px]">
            Il Mondo di Mare
          </p>
          <div className="relative">
            <svg
              className="absolute left-20 top-4 sm:left-[60px] sm:top-7 md:left-[45px] md:top-8 lg:left-[-39px] lg:top-10"
              width="34"
              height="10"
              viewBox="0 0 44 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.94 10.3019C41.7074 15.7464 33.7822 19.5485 24.6672 19.5485C17.4048 19.5485 10.6863 17.0739 7.22992 13.186L2.91105 16.9644C2.73934 17.1151 2.51084 17.1843 2.28241 17.1544C2.05554 17.1245 1.85273 16.9978 1.72528 16.807L0.133805 14.4199C-0.0768282 14.1045 -0.0348047 13.6841 0.233234 13.416L3.69815 9.9511L0.184336 5.7351C-0.0409922 5.46431 -0.061961 5.07767 0.133805 4.78437L1.7252 2.3972C1.85728 2.19868 2.07178 2.07003 2.30871 2.04674C2.55346 2.02113 2.78197 2.10776 2.9498 2.27602L7.35109 6.67688C10.8658 2.81803 17.3915 0.451487 24.6672 0.451487C33.7821 0.451487 41.7074 4.25362 43.9398 9.6981C44.02 9.89163 44.02 10.1084 43.94 10.3019ZM24.6672 2.04288C17.5587 2.04288 11.0266 4.51547 8.02562 8.34175C7.88494 8.52085 7.67439 8.63119 7.44752 8.64485C7.43119 8.64597 7.41486 8.6464 7.3993 8.6464C7.18867 8.6464 6.98672 8.56287 6.83667 8.41325L2.51075 4.08776L1.78733 5.17289L5.38588 9.49065C5.64927 9.8069 5.6283 10.2716 5.33689 10.5626L1.8199 14.08L2.54573 15.1694L6.79783 11.4496C6.96257 11.305 7.18094 11.2366 7.40085 11.2565C7.61999 11.2782 7.81971 11.3901 7.95334 11.565C10.9233 15.448 17.4833 17.9571 24.6672 17.9571C32.842 17.9571 40.1883 14.6289 42.3361 10C40.1883 5.37098 32.842 2.04288 24.6672 2.04288Z"
                fill="white"
              />
            </svg>
            <p className="font-[lobster] mt-[7px] text-2xl md:text-5xl sm:text-4xl pt-1 sm:pt-3 lg:text-5xl">
              Seafood
            </p>
            <svg
              className="absolute right-20 top-4 sm:right-[60px] sm:top-7 md:right-[40px] md:top-8 lg:top-10 lg:right-[-40px]"
              width="34"
              height="10"
              viewBox="0 0 44 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0599621 10.3019C2.29253 15.7464 10.2178 19.5485 19.3328 19.5485C26.5952 19.5485 33.3137 17.074 36.7701 13.186L41.089 16.9644C41.2607 17.1151 41.4892 17.1843 41.7176 17.1544C41.9445 17.1245 42.1473 16.9978 42.2747 16.807L43.8662 14.4199C44.0769 14.1045 44.0348 13.6841 43.7668 13.416L40.3019 9.9511L43.8157 5.73509C44.041 5.4643 44.062 5.07766 43.8662 4.78436L42.2748 2.39719C42.1427 2.19867 41.9282 2.07002 41.6913 2.04673C41.4466 2.02112 41.2181 2.10775 41.0502 2.27601L36.6489 6.67688C33.1342 2.81802 26.6085 0.451475 19.3328 0.451475C10.2179 0.451475 2.29262 4.25361 0.0601352 9.6981C-0.0200446 9.89163 -0.0200458 10.1084 0.0599621 10.3019ZM19.3328 2.04286C26.4413 2.04286 32.9734 4.51546 35.9744 8.34175C36.1151 8.52084 36.3256 8.63118 36.5525 8.64485C36.5688 8.64596 36.5852 8.64639 36.6007 8.64639C36.8113 8.64639 37.0133 8.56286 37.1633 8.41325L41.4893 4.08775L42.2127 5.17288L38.6141 9.49065C38.3507 9.8069 38.3717 10.2716 38.6631 10.5626L42.1801 14.08L41.4543 15.1694L37.2022 11.4496C37.0374 11.305 36.8191 11.2366 36.5992 11.2565C36.38 11.2782 36.1803 11.3901 36.0467 11.565C33.0768 15.448 26.5167 17.9571 19.3328 17.9571C11.158 17.9571 3.81165 14.6289 1.6639 10C3.81165 5.37097 11.158 2.04286 19.3328 2.04286Z"
                fill="white"
              />
            </svg>
          </div>
        </header>
        <button className="bg-fishBlue duration-150 hover:bg-[#7094ad] h-[50px] px-6 mt-3 sm:mt-5 lg:mt-8 text-white">
          <a href="#section4">Ανακαλύψτε το Μενού</a>
        </button>
      </div>
    </div>
  );
}
