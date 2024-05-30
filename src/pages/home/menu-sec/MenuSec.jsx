import React, { useState } from "react";
import Dishes from "./Dishes";
import lob from "../../../assets/lob.png";

export default function MenuSec() {
  const [collapse, setCollapse] = useState(false);

  return (
    <div id="section4" className="bg-[#F7F7F4] pb-10 relative overflow-hidden">
      <div className=" text-center overflow-hidden pt-16 lg:pb-20 pb-10">
        <div className="text-center">
          <p className="text-[#001C58] xl:text-xl">Δοκιμάστε τα καλύτερα</p>
        </div>
        <img
          src={lob}
          className="absolute overflow-hidden right-[-140px] xl:h-[200px] xl:w-[480px] h-[120px] w-[270px]"
          alt=""
        />
        <p className="text-2xl pb-1 lg:pb-3 pt-3 xl:text-5xl">Το Μενού Μας</p>
        <p className=" pt-2 xl:text-xl">Ανακαλύψτε γευστικές αισθήσεις</p>
      </div>
      <div className="grid sm:grid-cols-2 sm:px-20 gap-x-24 pt-4 px-4 xl:px-60">
        <Dishes
          name={"Μπαρμπούνι"}
          price={"13"}
          description={"Aenean massa. Cum sociis theme natoqu"}
        />
        <Dishes
          name={"Ψαρόσουπα"}
          price={"11"}
          description={"Aenean massa. Cum sociis theme natoqu"}
        />
        <Dishes
          name={"Ψητός καλαμάρι "}
          price={"16"}
          description={"Aenean massa. Cum sociis theme natoqu"}
        />
        <Dishes
          name={"Τσιπούρα"}
          price={"15"}
          description={"Aenean massa. Cum sociis theme natoqu"}
        />
        <Dishes
          name={"Λαβράκι"}
          price={"13"}
          description={"Aenean massa. Cum sociis theme natoqu"}
        />
        <Dishes
          name={"Μύδια σαγανάκι"}
          price={"16"}
          description={"Aenean massa. Cum sociis theme natoqu"}
        />
        <Dishes
          name={"Σαρδέλες"}
          price={"9"}
          description={"Aenean massa. Cum sociis theme natoqu"}
        />
        <Dishes
          name={"Γαρίδες σαγανάκι"}
          price={"10"}
          description={"Aenean massa. Cum sociis theme natoqu"}
        />
        <Dishes
          name={"Αστακομακαρονάδα  "}
          price={"8"}
          description={"Aenean massa. Cum sociis theme natoqu"}
        />
        <Dishes
          name={"Γαύρος τηγανητός "}
          price={"10"}
          description={"Aenean massa. Cum sociis theme natoqu"}
        />
      </div>
      {collapse && (
        <div className="grid sm:grid-cols-2 sm:px-20 gap-x-24 px-4 xl:px-60">
          <Dishes
            name={"Σουπιά με σπανάκι"}
            price={"6"}
            description={"Aenean massa. Cum sociis theme natoqu"}
          />
          <Dishes
            name={"Αθερίνα τηγανητή"}
            price={"11"}
            description={"Aenean massa. Cum sociis theme natoqu"}
          />
          <Dishes
            name={"Κακαβιά"}
            price={"15"}
            description={"Aenean massa. Cum sociis theme natoqu"}
          />
          <Dishes
            name={"Ριζότο θαλασσινών"}
            price={"8"}
            description={"Aenean massa. Cum sociis theme natoqu"}
          />
          <Dishes
            name={"Μανιτάρια γεμιστά"}
            price={"7"}
            description={"Aenean massa. Cum sociis theme natoqu"}
          />
          <Dishes
            name={"Μύδια αχνιστά"}
            price={"11"}
            description={"Aenean massa. Cum sociis theme natoqu"}
          />
          <Dishes
            name={"Χτένια στα κάρβουνα"}
            price={"16"}
            description={"Aenean massa. Cum sociis theme natoqu"}
          />
          <Dishes
            name={"Χταπόδι στιφάδο"}
            price={"8"}
            description={"Aenean massa. Cum sociis theme natoqu"}
          />
        </div>
      )}
      <div className="w-full flex justify-center">
        <button
          onClick={() => setCollapse(!collapse)}
          className="border hover:bg-white hover:text-fishDarkBlue text-white bg-fishDarkBlue border-gray-700 duration-150 py-2 px-3 "
        >
          {" "}
          {collapse ? <p>Λιγότερο</p> : <p>Ολοκληρο Μενού</p>}
        </button>
      </div>
    </div>
  );
}
