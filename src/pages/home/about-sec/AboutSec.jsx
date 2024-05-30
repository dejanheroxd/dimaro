import React, { useState } from "react";
import aboutFish from "../../../assets/aboutFish.jpg";
import crab from "../../../assets/crab.png";
import { motion } from "framer-motion";

export default function AboutSec() {
  const [collapse, setCollapse] = useState(false);

  return (
    <div
      id="section2"
      className="bg-[#EEF9FD] 2xl:bg-white relative xl:flex xl:justify-center xl:gap-x-10 pb-4 overflow-hidden"
    >
      <div className="2xl:bg-[#e1f7ff] absolute w-[1000px] left-[-320px] top-[-230px] z-0 h-[900px]"></div>
      <div className="p-4 pt-20 z-10">
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            className="max-w-[500px] xl:ml-10 xl:w-[800px] z-10 w-full"
            src={aboutFish}
            alt=""
          />
        </motion.div>
      </div>
      <div className="p-4 pt-[64px] relative xl:static xl:flex xl:flex-col xl:justify-center xl:items-start">
        <div className={`${collapse && "pt-[92px]"} flex relative md:text-xl`}>
          <motion.p
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Σχετικά με το Εστιατόριο
          </motion.p>
          <div className=" absolute left-[165px] top-[18px]"></div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl pt-4 md:pt-2 pb-8 xl:w-[700px] z-10 md:text-5xl md:leading-[60px] md:-ml-[5px]"
        >
          Απολαύστε ένα εξαιρετικό ταξίδι γεύσης
        </motion.p>
        <img
          className="absolute w-[240px] h-[110px] md:w-[380px] md:h-[170px] md:right-[-130px] md:top-[-50px] right-[-90px] rotate-[-50deg] xl:w-[480px] xl:h-[200px] xl:top-[-13px] xl:right-[-145px] 2xl:w-[650px] 2xl:h-[300px] top-4"
          src={crab}
          alt=""
        />
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-700 xl:w-[560px] z-10"
        >
          Καλώς ήρθατε στο φιλόξενο εστιατόριό μας στην Πρέβεζα, όπου η παράδοση
          συναντά την άνεση. Απολαύστε τη ζεστή και φιλική ατμόσφαιρα καθώς οι
          σεφ μας ετοιμάζουν μια μεγάλη ποικιλία από αυθεντικά ελληνικά
          θαλασσινά πιάτα, από φρέσκο χταπόδι μέχρι νόστιμα καλαμαράκια.
          <p className="pt-5">
            Προμηθευόμαστε τα θαλασσινά μας από αξιόπιστους προμηθευτές για να
            εξασφαλίσουμε ότι κάθε γεύμα είναι φρέσκο και νόστιμο. Το μενού των
            ποτών μας περιλαμβάνει μια εξαιρετική επιλογή από κοκτέιλ, ποτά,
            μπύρες και κρασιά, ιδανικά για να συνοδεύσουν το γεύμα σας. Είτε
            είστε εδώ για ένα χαλαρό δείπνο είτε για μια ειδική περίσταση,
            έχουμε κάτι για όλους.
          </p>
          {collapse && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="pt-5 "
            >
              Η δέσμευσή μας για εξαιρετική εξυπηρέτηση εξασφαλίζει ότι κάθε
              επίσκεψη είναι αξέχαστη. Είμαστε περήφανοι για την προσοχή μας στη
              λεπτομέρεια, από την παρουσίαση των πιάτων μας μέχρι την
              ατμόσφαιρα του χώρου μας.
            </motion.p>
          )}
        </motion.div>
        <button
          onClick={() => setCollapse(!collapse)}
          className="bg-fishBlue duration-150 hover:bg-[#7094ad] text-white h-[50px] mt-9 px-6"
        >
          Διαβάστε Περισσότερα
        </button>
      </div>
    </div>
  );
}
