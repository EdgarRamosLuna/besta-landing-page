import React from "react";
import car from "../assets/car.png";
import check from "../assets/check.png";
const Hero = () => {
  return (
    <div className="w-full mt-[80px] flex flex-[1] justify-center gap-[25px] items-center  h-[calc(100vh-80px)]" id="home">
      <div className="left w-[50%] flex justify-end">
        <img src={car} alt="car" className="w-[600px] h-[600px]" />
      </div>
      <div className="right w-[50%] mb-[-80px]">
        <h2 className="text-[35px] font-[800]">¿TRABAJAS EN APLICACIÓN?</h2>
        <h1 className="text-[90px] font-[800] leading-[1]">{`BESTA TU MEJOR
        ALIADO
`}</h1>
        <h3 className="color-gray text-[20px] font[100] mt-[10px] flex gap-2">DESPREOCÚPATE DE SEGUIR RENTANDO <img src={check} alt="palomita" className="h-[20px]" /></h3>
      </div>
    </div>
  );
};

export default Hero;
