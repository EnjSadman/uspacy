"use client"

import "./styles.css";
import { useRef } from "react";
import { ButtonPurple } from "../ButtonPurple/ButtonPurple";

export function SubmitButton ({disabled} : {disabled : boolean}) {
  const refSubmit = useRef<HTMLInputElement | null>(null);
  return (
    <div className="submit__container">
      <ButtonPurple disabled={disabled} text={"Зареєструватися"} clickEventFunction={() => refSubmit.current?.click()} />
      <input className="invisibleInput" ref={refSubmit} type="submit" />
    </div>
  )
}