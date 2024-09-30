"use client";

export function scrollToAnchor(anchor : string) {
  const element = document.getElementById(anchor);

  if (element) {
    element.scrollIntoView();
  }
}