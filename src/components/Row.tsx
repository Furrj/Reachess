import React from "react";

//COMPS
import Square from "./Square";

interface IProps {
  squares: JSX.Element[];
}

const Row: React.FC<IProps> = ({ squares }) => {
  return <div id="row">{squares}</div>;
};

export default Row;
