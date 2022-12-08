import React, { useRef } from "react";

//PIECES
import WhiteKing from "./pieces/WhiteKing";
import WhiteQueen from "./pieces/WhiteQueen";
import WhiteBishop from "./pieces/WhiteBishop";
import WhiteKnight from "./pieces/WhiteKnight";
import WhiteRook from "./pieces/WhiteRook";
import WhitePawn from "./pieces/WhitePawn";
import BlackKing from "./pieces/BlackKing";
import BlackQueen from "./pieces/BlackQueen";
import BlackBishop from "./pieces/BlackBishop";
import BlackKnight from "./pieces/BlackKnight";
import BlackRook from "./pieces/BlackRook";
import BlackPawn from "./pieces/BlackPawn";

interface IProps {
  id: string;
  currentPiece: string | null;
  type: string;
}

const Square: React.FC<IProps> = ({ id, currentPiece, type }) => {
  const thisSquare: React.RefObject<HTMLDivElement> = useRef(null);
  let thisPiece: JSX.Element | null = null;

  switch (currentPiece) {
    case "WhitePawn":
      thisPiece = <WhitePawn />;
      break;
    case "WhiteKing":
      thisPiece = <WhiteKing />;
      break;
    case "WhiteQueen":
      thisPiece = <WhiteQueen />;
      break;
    case "WhiteBishop":
      thisPiece = <WhiteBishop />;
      break;
    case "WhiteKnight":
      thisPiece = <WhiteKnight />;
      break;
    case "WhiteRook":
      thisPiece = <WhiteRook />;
      break;
    case "BlackKing":
      thisPiece = <BlackKing />;
      break;
    case "BlackQueen":
      thisPiece = <BlackQueen />;
      break;
    case "BlackBishop":
      thisPiece = <BlackBishop />;
      break;
    case "BlackKnight":
      thisPiece = <BlackKnight />;
      break;
    case "BlackRook":
      thisPiece = <BlackRook />;
      break;
    case "BlackPawn":
      thisPiece = <BlackPawn />;
      break;
  }

  const onClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (thisSquare.current) {
      thisSquare.current.style.backgroundColor = "red";
    }
  };

  return (
    <div className={type} id={id} onClick={onClick} ref={thisSquare}>
      {thisPiece}
    </div>
  );
};

export default Square;
