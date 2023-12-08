"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Slides from "../../components/slides/export";

export default function Home() {
  const [konamiCode, setKonamiCode] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event) => {
      let newCode = [...konamiCode, event.key];
      console.log(event.key);
      console.log(newCode);
      // Check if the konamiCode array matches the reverse Konami code sequence
      if (newCode.join("").toUpperCase().match("SAUCISSE")) {
        // Redirect to the external link
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&";
      }

      setKonamiCode((_) => newCode);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [konamiCode]);

  return (
    <main>
      <Slides />
    </main>
  );
}
