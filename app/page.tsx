'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [montant,setMontant] = useState<string>("");
  const [prixRAM, setPrixRAM] = useState<string>("11.12");

  return (
    <div>
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
        <p className="text-white"> Vous pouvez avoir { (parseFloat(montant) / parseFloat(prixRAM)).toFixed(2) } GB de RAM</p>
      </main>
      <footer className="flex flex-col justify-between items-center border-t border-slate-800 p-4">
        <p className="text-white">Calculateur de RAM. Créé par ElectroLynx.</p>
        <a href="https://github.com/ElectroLynx/ram" target="_blank" rel="noopener noreferrer">
          <p className="text-white hover:underline hover:text-blue-400">Repo sur GitHub</p>
        </a>
      </footer>
    </div>
  );
}