import React, { useRef, useState } from "react";

//TS
import { squareObj } from "../utils/initState";

//MOVEMENT
import * as mvmt from "../utils/Movement";

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
  x: number;
  y: number;
  gameState: squareObj[][];
  setGameState: React.Dispatch<React.SetStateAction<squareObj[][]>>;
}

const Square: React.FC<IProps> = ({
  id,
  currentPiece,
  type,
  x,
  y,
  gameState,
  setGameState,
}) => {
  const [moving, setMoving] = useState<boolean>(false);

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
      switch (currentPiece) {
        case "WhitePawn":
          if (!moving) {
            mvmt.PreWhitePawnMovement(
              thisSquare,
              currentPiece,
              gameState,
              setGameState,
              x,
              y
            );
          }
          break;
        case "BlackPawn":
          break;
      }
    }
  };

  return (
    <div className={type} id={id} onClick={onClick} ref={thisSquare}>
      {thisPiece}
    </div>
  );
};

export default Square;
