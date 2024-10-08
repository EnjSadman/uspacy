"use client"

import { scrollToAnchor } from "@/app/lib/scrollToAncror"
import { ButtonPurple } from "../ButtonPurple/ButtonPurple"

export function ScrollButton({text, anchor} : {text: string, anchor: string}) {
  return (
    <ButtonPurple disabled={false} text={text} clickEventFunction={() => scrollToAnchor(anchor)} />
  )
}