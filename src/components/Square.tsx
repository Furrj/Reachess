import React from "react";

interface IProps {
  id: string;
  currentPiece: string | null | JSX.Element;
  type: string;
}

const Square: React.FC<IProps> = ({ id, currentPiece, type }) => {
  return (
    <div className={type} id={id}>
      {currentPiece}
    </div>
  );
};

export default Square;
