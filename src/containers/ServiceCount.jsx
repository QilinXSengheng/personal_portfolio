import React from "react";
import { ServiceCard } from "../components";

const ServiceCount = () => {
  return (
    <div className="w-full py-6 lg:py-16 mt-10 flex items-center justify-center flex-wrap gap-8">
      <ServiceCard count={"3 years"} text={"Experiences"}/>
      <ServiceCard count={"7"} text={"Personal Projects"}/>
      <ServiceCard count={"5"} text={"Collab Projects"}/>
      <ServiceCard count={"0"} text={"Satisfied Client"}/>
    </div>
  );
};

export default ServiceCount;
