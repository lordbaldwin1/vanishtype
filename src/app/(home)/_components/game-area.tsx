"use client";

import { RotateCcwIcon } from "lucide-react";
import WordSetSelector from "./word-set-selector";
import { useState } from "react";
import { common200 } from "../_lib/common200";


export default function GameArea() {
  const [words, setWords] = useState(common200);
  return (
    <main className="flex flex-1 flex-col mb-40 items-center justify-center space-y-8">
      <WordSetSelector />
      <div className="flex flex-wrap h-40 gap-x-6 gap-y-4 text-4xl overflow-y-auto pointer-events-none no-scrollbar">
        {words.map((word, i) => (
          <span key={i}>{word}</span>
        ))}
      </div>
      <RotateCcwIcon size={18} />
    </main>
  )
}