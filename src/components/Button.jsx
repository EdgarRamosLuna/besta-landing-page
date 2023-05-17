import React from "react";

const Button = ({ children, classN }) => {
  return (
    <button      
      className={`bg-[#483e6b] text-white px-[32px] py-[15px]  border-[1px] border-transparent text-[16px] mt-[10] rounded-[18px] b-0 hover:bg-transparent hover:border-[1px] hover:border-[#483e6b] hover:text-[#483e6b] transition-all duration-[0.3s] ease-in-out`}
    >
      {children}
    </button>
  );
};

export default Button;
