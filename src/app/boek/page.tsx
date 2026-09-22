"use client";

import { useEffect } from "react";

export default function BoekPage() {
  useEffect(() => {
    window.location.replace("/#reserveren");
  }, []);
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-white">
      <p>
        Doorsturen naar reserveren…{" "}
        <a href="/#reserveren" className="text-amber-300 underline">
          Klik hier
        </a>
      </p>
    </main>
  );
}
