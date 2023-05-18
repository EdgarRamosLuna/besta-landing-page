import React from "react";

const data = [
  {
    title: "ALGUNOS REQUISITOS",
    description:
      "INE, Comprobante de domicilio, Constancia de situación fiscal actualizada, CURP, Licencia tipo C, Captura de Pantalla de App 1020 viajes en 3 meses,Capturas de las ganancias de los últimos dos meses en Uber y/o DiDi, INE de un aval, puede ser amigo, familiar o conocido, siempre y cuando no viva en el mismo domicilio, Depósito de garantía y gastos notariales (el monto lo dictarán en la entrevista y si esta al corriente sin deudas, éste se puede usar al final del contrato para poder liquidar el vehículo).",
    image: "https://besta.mx/assets/requisitos.png",
  },
  {
    title: "SELECCIONA TU AUTO",
    description: "Selecciona el auto de tus sueños y completa el formulario.",
    image: "https://besta.mx/assets/escoger-unidadbesta.png",
  },
  {
    title: "RECIBE TU SOLICITUD",
    description:
      "En el transcurso del día, un asesor se contactará contigo para agendar una entrevista y/o dar respuesta a tu solicitud.",
    image: "https://besta.mx/assets/cita-solicitud-info.png",
  },
];
const HowItWorks = () => {
  return (
    <div className="w-full my-[50px] relative">
      <div className="bg-transparent absolute top-[-100px]" id="comunidad" />
      <h1 className="mx-auto text-center text-[40px] font-bold mt-[40px]">
        Únete a nuestra comunidad BESTA
      </h1>
      <div className="w-full flex justify-center gap-[70px] py-[10%] flex-wrap">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[300px] h-auto bg-white"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[100%] px-[15px] box-border h-[232px]"
              height="232px"
              width="366px"
            />
            <h3 className="text-[25px] font-[100]">{item.title}</h3>
            <p className="text-[10px] font-[100] text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
