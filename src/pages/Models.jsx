import React from "react";
import Card from "../components/Card";
const data = [
  {
    title: "Chevrolet",
    description: "AVEO",
    image: "https://bestaweb.netlify.app/assets/AVEO-OFI2.png",
    price: '3,500',
  },
  {
    title: "NISSAN",
    description: "VDRIVE",
    image: "https://bestaweb.netlify.app/assets/VDRIVE-OFI3.png",
    price: '3,550',
  },
  {
    title: "NISSAN",
    description: "MARCH",
    image: "https://bestaweb.netlify.app/assets/MARCH-OFI2.png",
    price: '3,250',
  },
  {
    title: "DODGE",
    description: "ATTITUD",
    image: "https://bestaweb.netlify.app/assets/ATTITUD-OFI2.png",
    price: '3,550',
  },
];
const Models = () => {
  return (
    <div className="w-full my-[50px]" id="models">
      <h1 className="mx-auto text-center text-[40px] font-bold">Modelos disponibles</h1>
      <div className="w-full flex justify-center gap-[70px] py-[10%] flex-wrap">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Models;
