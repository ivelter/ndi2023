"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Degrade from "../../components/Degrade";
import SN1 from "../../components/slides/SN1";
import SN2 from "../../components/slides/SN2";
import SN3 from "../../components/slides/SN3";
import SN4 from "../../components/slides/SN4";
import SN5 from "../../components/slides/SN5";
import SN6 from "../../components/slides/SN6";
import SN7 from "../../components/slides/SN7";
import SN8 from "../../components/slides/SN8";
import SN9 from "../../components/slides/SN9";
import SN10 from "../../components/slides/SN10";
import SN11 from "../../components/slides/SN11";
import SN12 from "../../components/slides/SN12";
import SN13 from "../../components/slides/SN13";
import SN14 from "../../components/slides/SN14";
import SN15 from "../../components/slides/SN15";
import SN16 from "../../components/slides/SN16";
import base from "./principal.module.scss";

export default function Home() {
  const [konamiCode, setKonamiCode] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event) => {
      let newCode = [...konamiCode, event.key];
      console.log(event.key)
      console.log(newCode);
      // Check if the konamiCode array matches the reverse Konami code sequence
      if (newCode.join('').toUpperCase().match('SAUCISSE')) {
        // Redirect to the external link
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&';
      }

      setKonamiCode((prevCode) => newCode);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [konamiCode]);
  
  return (
    <main>
      <SN1></SN1>
      <SN2></SN2>
      <SN3></SN3>
      <SN4></SN4>
      <SN5></SN5>
      <SN6></SN6>
      <SN7></SN7>
      <SN8></SN8>
      <SN9></SN9>
      <SN10></SN10>
      <SN11></SN11>
      <SN12></SN12>
      <SN13></SN13>
      <SN14></SN14>
      <SN15></SN15>
      <SN16></SN16>

    </main>
  );
}
