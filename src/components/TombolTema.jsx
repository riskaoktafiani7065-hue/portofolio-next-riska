"use client";

import { useEffect, useState } from "react";

export default function TombolTema() {
    const [gelap, setGelap] = useState(false);

    useEffect(() => {
        const tema = localStorage.getItem("tema");

        if (tema === "gelap") {
            document.documentElement.classList.add("dark");
            setGelap(true);
        } else {
            document.documentElement.classList.remove("dark");
            setGelap(false);
        }
    }, []);

    function gantiTema() {
        const temaGelap = document.documentElement.classList.toggle("dark");

        setGelap(temaGelap);
        localStorage.setItem("tema", temaGelap ? "gelap" : "terang");
    }

    return (
        <button
            type="button"
            onClick={gantiTema}
            className="rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white hover:border-aksen hover:bg-aksen"
        >
            {gelap ? "Mode Terang" : "Mode Gelap"}
        </button>
    );
}
