"use client"

import { useEffect, useState } from 'react';
import './styles.css'

export function ChangingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const beliefsArray = ["підприємництво", "мрію", "перемогу", "сенси", "майбутнє", "лідерство", "місію", "бізнес", "візію", "допомогу"];

  useEffect(() => {
    setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % beliefsArray.length);
    }, 1000)
  },[])

  return (
  <h1 className='change montserrat'>
    Ми віримо у <br/> {beliefsArray[currentIndex]}
  </h1>
  )
}