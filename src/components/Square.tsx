import React, { useEffect } from "react";

import BlackBishop from "./pieces/BlackBishop";

interface IProps {
  id: string;
  currentPiece: string | null | JSX.Element;
  type: string;
}

const Square: React.FC<IProps> = ({ id, currentPiece, type }) => {
  var thisPiece: HTMLDivElement | null = null;

  useEffect(() => {
    thisPiece = document.querySelector(`#${id}`);
  }, []);

  const onClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (thisPiece) {
      thisPiece.style.backgroundColor = "red";
    }
  };

  return (
    <div className={type} id={id} onClick={onClick}>
      {currentPiece}
    </div>
  );
};

export default Square;
