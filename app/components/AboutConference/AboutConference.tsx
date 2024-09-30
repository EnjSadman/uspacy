"use client"

import "./styles.css"
import Image from "next/image";
import { Container } from "@mui/material";

export function AboutConference() {
  return (
    <Container className="aboutConference aboutConference__container">
      <Container className="aboutConference__text manrope">
        <h2 className="aboutConference__text--heading">
          Про що ця <br />
          онлайн-конференція
        </h2>
        <p className="aboutConference__text--description">
          Щодня ми ходимо на роботу, зустрічаємося з друзями, донатимо на Перемогу, робимо рутинні речі. Але чи замислюємося ми щодня навіщо це все? Чи є у цьому сенс? 
          Чи бачимо ми своє майбутнє? Чи мріємо ми?
        </p>
      </Container>
      <Image src={"/images/arrow.svg"} alt={"arrow"} width={26} height={54}/>
    </Container>
  )
}