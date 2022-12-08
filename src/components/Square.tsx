import React, { useRef } from "react";

interface IProps {
  id: string;
  currentPiece: string | null | JSX.Element;
  type: string;
}

const Square: React.FC<IProps> = ({ id, currentPiece, type }) => {
  const thisSquare: React.RefObject<HTMLDivElement> = useRef(null);

  const onClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (thisSquare.current) {
      thisSquare.current.style.backgroundColor = "red";
    }
  };

  return (
    <div className={type} id={id} onClick={onClick} ref={thisSquare}>
      {currentPiece}
    </div>
  );
};

export default Square;
