"use client";
import { useEffect } from "react";

export default function BoekPage() {
  useEffect(() => {
    window.location.replace("/#online-boeken");
  }, []);
  return (
    <main style={{ padding: 48, textAlign: "center" }}>
      <a className="btn btn--primary" href="/#online-boeken">
        Naar online boeken
      </a>
    </main>
  );
}
