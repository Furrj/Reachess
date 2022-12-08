export interface squareObj {
  name: string;
  piece: string | null;
  x: number;
  y: number;
  possibleMove?: boolean;
  possibleMovePiece?: string;
}

export const initState: squareObj[][] = [
  [
    {
      name: "A1",
      piece: "WhiteRook",
      x: 0,
      y: 0,
    },
    {
      name: "B1",
      piece: "WhiteKnight",
      x: 1,
      y: 0,
    },
    {
      name: "C1",
      piece: "WhiteBishop",
      x: 2,
      y: 0,
    },
    {
      name: "D1",
      piece: "WhiteQueen",
      x: 3,
      y: 0,
    },
    {
      name: "E1",
      piece: "WhiteKing",
      x: 4,
      y: 0,
    },
    {
      name: "F1",
      piece: "WhiteBishop",
      x: 5,
      y: 0,
    },
    {
      name: "G1",
      piece: "WhiteKnight",
      x: 6,
      y: 0,
    },
    {
      name: "H1",
      piece: "WhiteRook",
      x: 7,
      y: 0,
    },
  ],
  [
    {
      name: "A2",
      piece: "WhitePawn",
      x: 0,
      y: 1,
    },
    {
      name: "B2",
      piece: "WhitePawn",
      x: 1,
      y: 1,
    },
    {
      name: "C2",
      piece: "WhitePawn",
      x: 2,
      y: 1,
    },
    {
      name: "D2",
      piece: "WhitePawn",
      x: 3,
      y: 1,
    },
    {
      name: "E2",
      piece: "WhitePawn",
      x: 4,
      y: 1,
    },
    {
      name: "F2",
      piece: "WhitePawn",
      x: 5,
      y: 1,
    },
    {
      name: "G2",
      piece: "WhitePawn",
      x: 6,
      y: 1,
    },
    {
      name: "H2",
      piece: "WhitePawn",
      x: 7,
      y: 1,
    },
  ],
  [
    {
      name: "A3",
      piece: "",
      x: 0,
      y: 2,
    },
    {
      name: "B3",
      piece: "",
      x: 1,
      y: 2,
    },
    {
      name: "C3",
      piece: "",
      x: 2,
      y: 2,
    },
    {
      name: "D3",
      piece: "",
      x: 3,
      y: 2,
    },
    {
      name: "E3",
      piece: "",
      x: 4,
      y: 2,
    },
    {
      name: "F3",
      piece: "",
      x: 5,
      y: 2,
    },
    {
      name: "G3",
      piece: "",
      x: 6,
      y: 2,
    },
    {
      name: "H3",
      piece: "",
      x: 7,
      y: 2,
    },
  ],
  [
    {
      name: "A4",
      piece: "",
      x: 0,
      y: 3,
    },
    {
      name: "B4",
      piece: "",
      x: 1,
      y: 3,
    },
    {
      name: "C4",
      piece: "",
      x: 2,
      y: 3,
    },
    {
      name: "D4",
      piece: "",
      x: 3,
      y: 3,
    },
    {
      name: "E4",
      piece: "",
      x: 4,
      y: 3,
    },
    {
      name: "F4",
      piece: "",
      x: 5,
      y: 3,
    },
    {
      name: "G4",
      piece: "",
      x: 6,
      y: 3,
    },
    {
      name: "H4",
      piece: "",
      x: 7,
      y: 3,
    },
  ],
  [
    {
      name: "A5",
      piece: "",
      x: 0,
      y: 4,
    },
    {
      name: "B5",
      piece: "",
      x: 1,
      y: 4,
    },
    {
      name: "C5",
      piece: "",
      x: 2,
      y: 4,
    },
    {
      name: "D5",
      piece: "",
      x: 3,
      y: 4,
    },
    {
      name: "E5",
      piece: "",
      x: 4,
      y: 4,
    },
    {
      name: "F5",
      piece: "",
      x: 5,
      y: 4,
    },
    {
      name: "G5",
      piece: "",
      x: 6,
      y: 4,
    },
    {
      name: "H5",
      piece: "",
      x: 7,
      y: 4,
    },
  ],
  [
    {
      name: "A6",
      piece: "",
      x: 0,
      y: 5,
    },
    {
      name: "B6",
      piece: "",
      x: 1,
      y: 5,
    },
    {
      name: "C6",
      piece: "",
      x: 2,
      y: 5,
    },
    {
      name: "D6",
      piece: "",
      x: 3,
      y: 5,
    },
    {
      name: "E6",
      piece: "",
      x: 4,
      y: 5,
    },
    {
      name: "F6",
      piece: "",
      x: 5,
      y: 5,
    },
    {
      name: "G6",
      piece: "",
      x: 6,
      y: 5,
    },
    {
      name: "H6",
      piece: "",
      x: 7,
      y: 5,
    },
  ],
  [
    {
      name: "A7",
      piece: "BlackPawn",
      x: 0,
      y: 6,
    },
    {
      name: "B7",
      piece: "BlackPawn",
      x: 1,
      y: 6,
    },
    {
      name: "C7",
      piece: "BlackPawn",
      x: 2,
      y: 6,
    },
    {
      name: "D7",
      piece: "BlackPawn",
      x: 3,
      y: 6,
    },
    {
      name: "E7",
      piece: "BlackPawn",
      x: 4,
      y: 6,
    },
    {
      name: "F7",
      piece: "BlackPawn",
      x: 5,
      y: 6,
    },
    {
      name: "G7",
      piece: "BlackPawn",
      x: 6,
      y: 6,
    },
    {
      name: "H7",
      piece: "BlackPawn",
      x: 7,
      y: 6,
    },
  ],
  [
    {
      name: "A8",
      piece: "BlackRook",
      x: 0,
      y: 7,
    },
    {
      name: "B8",
      piece: "BlackKnight",
      x: 1,
      y: 7,
    },
    {
      name: "C8",
      piece: "BlackBishop",
      x: 2,
      y: 7,
    },
    {
      name: "D8",
      piece: "BlackQueen",
      x: 3,
      y: 7,
    },
    {
      name: "E8",
      piece: "BlackKing",
      x: 4,
      y: 7,
    },
    {
      name: "F8",
      piece: "BlackBishop",
      x: 5,
      y: 7,
    },
    {
      name: "G8",
      piece: "BlackKnight",
      x: 6,
      y: 7,
    },
    {
      name: "H8",
      piece: "BlackRook",
      x: 7,
      y: 7,
    },
  ],
];
