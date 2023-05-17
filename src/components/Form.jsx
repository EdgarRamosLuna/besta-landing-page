import React from "react";
import Button from "./Button";

const Form = () => {
  return (
    <form className="w-[80%] flex flex-col gap-[10px] items-center">
      <input
        type="text"
        placeholder="Nombre"
        className="w-[100%] p-[10px] rounded-[10px] border-[1px] border-[#483e6b] bg-white border-l-[0px] border-r-[0px] border-t-[0px] c-input outline-none"
      />
      <input
        type="text"
        placeholder="Teléfono"
        className="w-[100%] mt-[10px] p-[10px] rounded-[10px] border-[1px] border-[#483e6b] bg-white border-l-[0px] border-r-[0px] border-t-[0px] c-input outline-none justify-center"
      />
      <label htmlFor="" className="text-left mx-auto my-0 text-[12px] w-[90%]">
        Selecciona una opción:{" "}
      </label>
      <select className="w-[90%] p-[10px] rounded-[10px] border-[1px] border-[#483e6b] bg-white outline-none h-[40px] text-[14px]">
        <option value="0">Uber</option>
        <option value="1">Didi</option>
        <option value="2">Uber y Didi</option>
        <option value="3">Otros</option>
      </select>
      <label htmlFor="" className="text-left mx-auto my-0 text-[12px] w-[90%]">
        ¿Cuántos viajes llevas realizados?:{" "}
      </label>
      <select className="w-[90%] p-[10px] rounded-[10px] border-[1px] border-[#483e6b] bg-white outline-none h-[40px] text-[14px]">
        <option value="Menos de 700">Menos de 700</option>
        <option value="Mas de 800">Mas de 800</option>
        <option value="Mas de 1,000">Más de 1,000</option>
        <option value="Mas de 3,000">Más de 3,000</option>
      </select>
      <label htmlFor="" className="text-left mx-auto my-0 text-[12px] w-[90%]">
        ¿En que parte de México vives?:{" "}
      </label>
      <select className="w-[90%] p-[10px] rounded-[10px] border-[1px] border-[#483e6b] bg-white outline-none h-[40px] text-[14px]">
        <option value="Nuevo León">Nuevo León</option>
        <option value="Guadalajara"> Guadalajara</option>
        <option value="Otro">Otro</option>
      </select>
      <textarea
        type="text"
        placeholder="Ciudad"
        className="w-[90%] p-[10px] rounded-[10px] border-[1px] border-[#483e6b] h-[100px] bg-white resize-none outline-none mt-[10px]"
      />
      <div className="w-[90%] text-left">
        <Button>Enviar</Button>
      </div>
    </form>
  );
};

export default Form;
