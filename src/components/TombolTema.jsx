"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function TombolTema() {
  const [gelap, setGelap] = useState(false);

  function gantiTema() {
    setGelap(!gelap);

    document.documentElement.classList.toggle("dark");
  }

  return (
    <Button
      variant="outline"
      onClick={gantiTema}
      className="border-white bg-transparent text-white hover:bg-aksen hover:text-white"
    >
      {gelap ? "Mode Terang" : "Mode Gelap"}
    </Button>
  );
}