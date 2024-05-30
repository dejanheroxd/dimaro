import React, { useEffect, useRef } from "react";
import ContactSec from "../home/contace-sec/ContactSec";
import { X } from "phosphor-react";

export default function Contact({ closePopUp }) {
  let menuRef = useRef();

  useEffect(() => {
    function handler(e) {
      if (!menuRef.current.contains(e.target)) {
        closePopUp();
      }
    }
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="bg-black/50 flex justify-center items-center fixed inset-0 z-[200] h-full w-full">
      <div
        ref={menuRef}
        className="bg-white mx-4 lg:mx-0 w-[900px] h-[445px] lg:h-[700px] relative rounded-lg"
      >
        <div
          onClick={() => closePopUp()}
          className="bg-white hover:cursor-pointer rounded-full top-0 right-0 w-8 h-8 absolute  flex justify-center items-center lg:top-2 lg:right-2"
        >
          <X size={20} />
        </div>
        <div className="flex justify-center font-serif xl:pt-14">
          <div className="w-64 xl:w-[550px] flex flex-col text-center xl:text-left items-center pt-12">
            <p className="text-italia text-gray-700 text-3xl pb-6 xl:pb-9">
              Επικοινωνία
            </p>
            <div className="hidden lg:block">
              <p className="pb-6 text-lg xl:text-xl text-fishDarkBlue">
                Σπηλιάδου 10 48100 Πρέβεζα
              </p>
              <div className="text-lg xl:text-xl text-fishDarkBlue xl:flex xl:justify-center xl:gap-x-36 xl:w-full">
                <div className="pb-6 xl:leading-9">
                  <p className="w-[221px]">Δευτ - Παρ: 8:00 - 16:00</p>
                  <p>Σάββατο: 8:00 - 16:00</p>
                  <p>Κυριακή: 8:00 - 16:00</p>
                </div>
                <div>
                  <p>Ilmondo@gmail.com</p>
                  <p>+30 2682 021761</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          className="flex flex-col items-center pt-12 pb-24"
          action="https://formspree.io/f/xvojzoly"
          method="POST"
        >
          <div className="xl:w-[550px]">
            <div className="flex flex-col items-center gap-y-3 w-72 xl:w-[550px] xl:grid xl:grid-cols-4 xl:gap-x-3">
              <label className="border-b border-gray-600 w-full xl:col-span-2 sm:hover:border-b-italia">
                <input
                  className="pl-6 text-gray-700 focus:outline-none pb-2 w-full"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </label>
              <label className="border-b border-gray-600 w-full xl:col-span-2 sm:hover:border-b-italia">
                <input
                  className="pl-6 text-gray-700 focus:outline-none pb-2 w-full"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </label>
              <label className="border-b border-gray-600 w-full xl:col-span-4 sm:hover:border-b-italia">
                <textarea
                  className="pl-6 text-gray-700 focus:outline-none pb-2 xl:pt-2 w-full h-24"
                  name="message"
                  placeholder="Type you message here..."
                ></textarea>
              </label>
              <button
                className="border hover:bg-white hover:text-fishDarkBlue text-white bg-fishDarkBlue border-gray-700 w-full py-2 xl:col-span-4 sm:hover:text-italia duration-200"
                type="submit"
              >
                Υποβολή
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
