'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [montant,setMontant] = useState<string>("");
  const [prixRAM, setPrixRAM] = useState<string>("11.12");

  return (
    <div className="flex items-center justify-center">
      <main className="flex flex-col items-center justify-center min-h-screen gap-6">
        <h1 className="text-3xl font-bold text-white">Calculateur de RAM</h1>

        <div className="relative">
          <input className="pr-8 border p-2 rounded-md appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            type="number"
            value={montant}
            onChange={(e) => setMontant (e.target.value)}
          />
          <span className="absolute right-3 text-gray-400">€</span>
        </div>
        <p className="text-white"> Vous pouvez avoir { (montant / prixRAM).toFixed(2) } GB de RAM</p>
      </main>
    </div>
  );
}
