import React from "react";

const Card = ({img}) => {
  return (
    <>
      <div className="w-[400px] h-[300px]  shadow-xl rounded-xl overflow-hidden border-1">
        <div>
          <img
            src={img}
            alt="cognizance1.jpg"
            className="w-[400px] h-[300px] rounded-xl cursor-pointer transition duration-500 ease-in-out hover:scale-110"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
