import React from "react";

const Card = (props) => {
  return (
    <div className="py-4 text-2xl font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded-md px-14 hover:bg-blue-400 hover:border-blue-500">
      {props.children}
    </div>
  );
};

export default Card;
