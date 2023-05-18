import React from "react";

import { useParams } from "react-router-dom";
import ccar from "../assets/ccar.png";
import calendar from "../assets/calendar.png";
import status from "../assets/status.png";
import clock from "../assets/clock.png";
import Form from "../components/Form";
const Formulario = () => {
  const { car } = useParams();
  //console.log(car)
  const data = [
    {
      title: "Chevrolet",
      description: "AVEO",
      image: "https://bestaweb.netlify.app/assets/AVEO-OFI2.png",
      price: "3,500",
      controls: "Estándar",
      year: "2022",
      warranty: "15,000",
      status: "Nuevo",
      buy: "36 Meses",
    },
    {
      title: "NISSAN",
      description: "VDRIVE",
      image: "https://bestaweb.netlify.app/assets/VDRIVE-OFI3.png",
      price: "3,550",
      controls: "Estándar",
      year: "2022",
      warranty: "15,000",
      status: "Nuevo",
      buy: "36 Meses",
    },
    {
      title: "NISSAN",
      description: "MARCH",
      image: "https://bestaweb.netlify.app/assets/MARCH-OFI2.png",
      price: "3,250",
      controls: "Estándar",
      year: "2022",
      warranty: "15,000",
      status: "Nuevo",
      buy: "36 Meses",
    },
    {
      title: "DODGE",
      description: "ATTITUD",
      image: "https://bestaweb.netlify.app/assets/ATTITUD-OFI2.png",
      price: "3,550",
      controls: "Estándar",
      year: "2022",
      warranty: "15,000",
      status: "Nuevo",
      buy: "36 Meses",
    },
  ];

  return (
    <div className="mt-[80px] h-[calc(100vh-80px)] bg-[#e1e1e1]">
      {
        // show data where title === car
        data.map(
          (item, index) =>
            item.description.toLocaleLowerCase() ===
              car.toLocaleLowerCase() && (
              <>
                <div className="w-full flex justify-between items-center py-[30px] px-[15px] box-border gap-[15px]">
                  <div className="flex-[1] flex flex-col justify-center items-center">
                    <div className="w-[100%] flex flex-col">
                      <h2 className="text-[40px] font-bold leading-[50px]">
                        {item.description}
                      </h2>
                      <h3 className="text-[25px] font-[100] leading-[25px]">{item.title}</h3>
                      <div className="w-full flex gap-[15px]">
                        <div className="w-auto flex items-center">
                          <img
                            src={ccar}
                            alt="car"
                            className=" h-[45px] mr-[20px]"
                          />
                          <p className="text-[20px] font-[400]">
                            {item.controls}
                          </p>
                        </div>
                        <div className="w-auto flex items-center">
                          <img
                            src={calendar}
                            alt="calendar"
                            className=" h-[35px] mr-[20px]"
                          />
                          <p className="text-[20px] font-[400]">{item.year}</p>
                        </div>
                        <div className="w-auto flex items-center">
                          <img
                            src={status}
                            alt="status"
                            className=" h-[35px] mr-[20px]"
                          />
                          <p className="text-[20px] font-[400]">
                            {item.status}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-[100%] flex justify-start flex-wrap">
                      <div className="flex  items-start">
                        <img src={item.image} alt="car" className="w-[600px]" />
                      </div>
                      <div className="flex flex-col justify-start">
                        <div className="w-full flex flex-col">
                          <div className="w-full flex justify-start items-center gap-2">
                            <img src={clock} alt="clock" className="h-[35px]" />
                            <strong className="text-[25px]">{item.buy}</strong>
                          </div>
                          <div className="w-full flex justify-start items-center my-[10px]">
                            <p>*Con opción de compra</p>
                          </div>
                          <div className="w-full flex justify-center items-start text-[#6fc7da] flex-col mb-[20px]">
                            <p className="text-[25px] leading-[25px]">
                              <strong>${item.price} /</strong>
                            </p>
                            <p className="text-[28px] leading-[30px]">Semanal</p>
                          </div>
                          <div className="w-full flex justify-center items-start text-[#6fc7da] flex-col">
                            <p className="text-[25px] leading-[25px]">
                              <strong>${item.warranty} /</strong>
                            </p>
                            <p className="text-[28px] leading-[30px]">Depósito en Garantía</p>
                            <span className="text-black text-[10px]">
                              + $2,000 de gastos notariales
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex justify-center items-center">
                        <p className="">
                          * Consulta términos y condiciones * Precios sujetos a
                          cambios sin previo aviso
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[0.6] flex flex-col">
                    <div className="w-[100%] flex flex-col items-center bg-white rounded-[30px] py-[15px]">
                      <div className="w-full flex items-center flex-col">
                        <h3 className="text-[20px] font-[100] mt-[10px]">
                          Se parte de BESTA,
                        </h3>
                        <h2 className="text-[30px] font-[800]">¡Bienvenido!</h2>
                      </div>
                      <Form />
                    </div>
                  </div>
                </div>
              </>
            )
        )
      }
    </div>
  );
};

export default Formulario;
