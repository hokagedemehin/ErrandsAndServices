import React from "react";
import { FaStore } from "react-icons/fa";
import ServiceImageCard from "../service.image.card.component";

const ServicesAll = () => {
  // correct ted the naming error folder name...
  const apiData = [
    {
      image: "/servicePage/listofServices/homeCleaner.png",
      name: "Home Cleaning",
    },
    { image: "/servicePage/listofServices/cook.png", name: "Cook" },
    {
      image: "/servicePage/listofServices/dispatchRider.png",
      name: "Dispatch Rider",
    },
    {
      image: "/servicePage/listofServices/marketShopper1.png",
      name: "Market Shopper",
    },
    {
      image: "/servicePage/listofServices/houseAgent.png",
      name: "House Agent",
    },
    {
      image: "/servicePage/listofServices/ushers1.png",
      name: "Event Ushers",
    },
    {
      image: "/servicePage/listofServices/dryCleaner.png",
      name: "Dry Cleaner",
    },
    {
      image: "/servicePage/listofServices/security1.png",
      name: "Security Guard",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-2">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 ">
        {apiData.map(({ name, image }) => (
          <ServiceImageCard name={name} image={image} />
        ))}
      </div>
    </div>
  );
};

export default ServicesAll;
