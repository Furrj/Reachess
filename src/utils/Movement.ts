import { squareObj } from "./initState";

export const PreWhitePawnMovement = (
  thisSquare: React.RefObject<HTMLDivElement>,
  piece: string,
  gameState: squareObj[][],
  setGameState: React.Dispatch<React.SetStateAction<squareObj[][]>>,
  x: number,
  y: number
): void => {
  //Change original square color
  if (thisSquare.current) {
    thisSquare.current.style.backgroundColor = "lightGrey";
  }
  //Change move square
  const legalMove: squareObj = gameState[y + 1][x]
  legalMove.possibleMove = true;
  legalMove.possibleMovePiece = piece;
  const nextSquare: HTMLDivElement = document.getElementById(legalMove.name) as HTMLDivElement;
   if (nextSquare) {
    nextSquare.style.backgroundColor = "red";
   }
   const newState = [...gameState];
   newState[y + 1][x] = {...legalMove};
   setGameState(newState);
   return;
};
