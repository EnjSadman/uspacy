"use client"

import "./styles.css";
import { Button } from "@mui/material";

interface Props {
  text: string,
  clickEventFunction: (() => void) | null;
  disabled: boolean;
}

export function ButtonPurple({text, clickEventFunction, disabled} : Props) {
  return (
    <Button
      className="button button-purple"
      disabled={disabled}
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