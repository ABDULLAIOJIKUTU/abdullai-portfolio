import React from "react";

const Button = ({  name }) => {
  return (
    <div>
      <button className="w-fit bg-white/60 font-medium py-2 px-4 rounded-lg border-non">{name}</button>
    </div>
  );
};

export default Button;
