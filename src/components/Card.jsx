import React from "react";
import { useNavigate } from "react-router-dom";

import calendarioico from "../assets/calendarioico.png";
const Card = ({ key, title, description, image, price }) => {
  const navigate = useNavigate();
  const handleClick = (rote) => {
    //navigate("/contacto");
    navigate(`/formulario/${rote}`);
  };
  return (
    <div className="shadow-custom w-[366px]  hover:rounded-[10px] transition-all duration-[0.3s] hover:scale-[1.01] cursor-pointer" onClick={() => handleClick(description)}>
      <div className=" flex flex-col justify-center items-center gap-[5px]">
        <h2 className="text-[25px] font-[800]">{title}</h2>
        <h3 className="text-[0.9rem] font-[100]">{description}</h3>
      </div>
      <div className=" flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="w-[100%] px-[15px] box-border h-[232px]"
          height="232px"
          width="366px"
        />
      </div>
      <div className="w-full box-border px-[15px]">
        <p className="text-[16px] font-[800] text-[#6fc7da] text-right">
          <strong>{`*$${price}`} / Semanal</strong>
        </p>
        <div className="w-full flex justify-between items-center my-[15px]">
          <img src={calendarioico} alt="calendario" className="w-[10%]" />
          <div className="w-[85%]">
            <p className="text-[11px]">36 meses con opción a compra</p>
            <p className="text-[8px] ml-[60px]">*Precio sujeto a cambios sin previo aviso</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
