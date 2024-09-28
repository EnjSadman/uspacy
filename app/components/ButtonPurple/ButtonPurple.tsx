"use client"

import "./styles.css";
import { Button } from "@mui/material";

interface Props {
  text: string,
  clickEventFunction: (() => void) | null;
}

export function ButtonRegisterPurple({text, clickEventFunction} : Props) {
  return (
    <Button
      className="button button-purple"
      onClick={() => {
        if (clickEventFunction !== null) {
          clickEventFunction();
        }
      }}
    >
      {text}
    </Button>
  )
}