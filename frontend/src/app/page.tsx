'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://16.170.224.12/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p className="text-lg font-medium">Message from backend: {message}</p>
        {/* rest of your content here */}
      </main>
      <footer>{/* your footer here */}</footer>
    </div>
  );
}
