import React from "react";

export default function Dishes({ name, price, description }) {
  return (
    <div className="pb-8">
      <div className="flex flex-col xl:flex-row xl:items-end">
        <p className="text-xl text-[#001C58] xl:w-[270px]">{name}</p>
        <p className="w-full bg-gray-300 h-[1px] xl:mb-[6px] hidden lg:block"></p>
        <p className="text-lg text-[#001C58] xl:pl-[7px] pt-1">{price}€</p>
        <p></p>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
