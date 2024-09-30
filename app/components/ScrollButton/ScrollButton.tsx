"use client"

import { scrollToAnchor } from "@/app/lib/scrollToAncror"
import { ButtonPurple } from "../ButtonPurple/ButtonPurple"

export function ScrollButton({text, anchor} : {text: string, anchor: string}) {
  return (
    <ButtonPurple text={text} clickEventFunction={() => scrollToAnchor(anchor)} />
  )
}