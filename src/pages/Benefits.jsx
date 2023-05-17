import React from "react";
import car2 from "../assets/car2.png";
import Button from "../components/Button";
const Benefits = () => {
  return (
    <div className="w-full" id="beneficios">
      <div className="title w-full text-center mx-auto p-[10px]">
        <h2 className="text-[35px] font-[800] ">BESTA ADAPTADO A TU VIDA</h2>
      </div>
      <div className="cont w-full flex p-[50px]">
        <div className="left flex-[1, 1]">
          <p className="font-[500] text-[20px] my-[50px] text-[#483e6b]">
            Logramos ser tu aliado más importante gracias a nuestros beneficios
            y la rápida respuesta para maximizar tus ganancias.
          </p>
          <Button>Preguntas frecuentes</Button>
        </div>
        <div className="right flex-[1, 1] flex box-border justify-end">
          <img src={car2} alt="car" className="w-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
