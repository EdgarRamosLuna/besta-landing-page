import React from "react";
import Hero from "./Hero";
import Models from "./Models";
import HowItWorks from "./HowItWorks";

import sol from "../assets/solicitud-enviada.png";
import Form from "../components/Form";
import Bene from "./Bene";

const Home = () => {
  return (
    <>
      <Hero />
      <Models />
      <HowItWorks />
      <Bene />
      <footer className="w-full my-[150px]" id="contacto">
        <div className="w-full">
          <h1 className="mx-auto text-center text-[40px] font-bold mt-[40px]">
            ¡SÁLTATE LAS COMPLICACIONES!
          </h1>
        </div>
        <div className="w-full flex p-[10px]">
          <div className="flex-[1]">
            <div className="w-[70%] my-[0] mx-[50px] flex justify-center items-center">
              <img src={sol} alt="solicitud enviada" className="h-[400px]" />
            </div>
          </div>
          <div className="flex-[1] flex justify-center text-center bg-[#e1e1e1] rounded-[10px] flex-col p-[10px]">
            <div className="mb-[25px]">
              <h3 className="text-[25px] mt-[40px] font-[100]">
                ¡Déjanos tus datos!
              </h3>
              <p>Nosotros te contactamos</p>
            </div>
            <div className="w-[100%] flex justify-center items-center">
              <Form />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
