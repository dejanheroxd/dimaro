import React from "react";
import seafood from "../../../assets/seafood.jpg";
import { motion } from "framer-motion";

export default function OpeningTime({ openPopUp }) {
  return (
    <div
      id="section3"
      className="p-4 xl:pb-28 xl:flex relative overflow-hidden xl:justify-center xl:gap-48 xl:items-center "
    >
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-3xl pt-10 md:text-5xl md:-ml-[5px]">
            Ώραριο Λειτουργίας
          </p>
          <p className="pt-5">
            Ελάτε να απολαύσετε φαγητό σε φιλική ατμόσφαιρα
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="py-3"
        >
          Ώρες:
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="pb-1">
            Δευτέρα - Παρασκευή
            <span className="text-gray-500"> : 8:00 - 16:00</span>
          </p>
          <p className="pb-1">
            Σάββατο<span className="text-gray-500"> : 8:00 - 16:00</span>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="pb-1">
            Κυριακή<span className="text-gray-500"> : 8:00 - 16:00</span>
          </p>
          <p className="pb-1">
            Αργίες<span className="text-gray-500"> : Κλειστά</span>
          </p>
        </motion.div>
        <button
          onClick={() => openPopUp()}
          className="bg-fishBlue duration-150 hover:bg-[#7094ad] hover:cursor-pointer text-white h-[50px] mt-9 px-6"
        >
          Επικοινωνήστε μαζί μας
        </button>
      </div>
      <div className="2xl:bg-[#e1f7ff] hidden 2xl:block absolute w-[600px] right-[-50px] top-[200px] z-0 h-[680px]"></div>
      <motion.div
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="xl:mr-[-170px] relative "
      >
        <img className="pt-8 pb-10 xl:w-[950px]" src={seafood} alt="" />
      </motion.div>
    </div>
  );
}
