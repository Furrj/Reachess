import { squareObj } from "./initState";

export const moveTo = () => {

}

export const PreWhitePawnMovement = (
  thisSquare: React.RefObject<HTMLDivElement>,
  piece: string,
  gameState: squareObj[][],
  setGameState: React.Dispatch<React.SetStateAction<squareObj[][]>>,
  x: number,
  y: number,
  moving: boolean,
  setMoving: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  //Change original square color
  if (!moving) {
    setMoving(true);
    if (thisSquare.current) {
      thisSquare.current.style.backgroundColor = "lightGrey";
    }
    //Change move square
    const legalMove: squareObj = gameState[y + 1][x];
    legalMove.possibleMove = true;
    legalMove.possibleMovePiece = piece;
    legalMove.comingFrom = [y, x];
    const nextSquare: HTMLDivElement = document.getElementById(
      legalMove.name
    ) as HTMLDivElement;
    if (nextSquare) {
      nextSquare.style.backgroundColor = "red";
    }
    const newState: squareObj[][] = [...gameState];
    newState[y + 1][x] = { ...legalMove };
    setGameState(newState);
    return;
  } else {
    setMoving(false);
    if (thisSquare.current) {
      thisSquare.current.style.backgroundColor = "";

      const legalMove: squareObj = gameState[y + 1][x];
      legalMove.possibleMove = false;
      legalMove.possibleMovePiece = "";
      const nextSquare: HTMLDivElement = document.getElementById(
        legalMove.name
      ) as HTMLDivElement;
      if (nextSquare) {
        nextSquare.style.backgroundColor = "";
      }
      const newState: squareObj[][] = [...gameState];
      newState[y + 1][x] = { ...legalMove };
      setGameState(newState);
      return;
    }
  }
};
