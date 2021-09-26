import React from "react";
import { FaStore } from "react-icons/fa";
import ServiceImageCard from "../service.image.card.component";

const ServicesAll = () => {
  const apiData = [
    {
      image: "/servicePage/listOfServices/homeCleaner.png",
      name: "Home Cleaning",
    },
    { image: "/servicePage/listOfServices/cook.png", name: "Cook" },
    {
      image: "/servicePage/listOfServices/dispatchRider.png",
      name: "Dispatch Rider",
    },
    {
      image: "/servicePage/listOfServices/marketShopper1.png",
      name: "Market Shopper",
    },
    {
      image: "/servicePage/listOfServices/houseAgent.png",
      name: "House Agent",
    },
    {
      image: "/servicePage/listOfServices/ushers1.png",
      name: "Event Ushers",
    },
    {
      image: "/servicePage/listOfServices/dryCleaner.png",
      name: "Dry Cleaner",
    },
    {
      image: "/servicePage/listOfServices/security1.png",
      name: "Security Guard",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-2">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {apiData.map(({ name, image }) => (
          <ServiceImageCard name={name} image={image} />
        ))}
      </div>
    </div>
  );
};

export default ServicesAll;
