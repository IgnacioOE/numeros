'use client'
import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate= async () => {
    
    const response = await fetch('http://localhost:3000/result')
    const data = await response.json();
    setResult(data.result);
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <div className="grid grid-cols-3 gap-4">
        <input type="number" className="border border-gray-300 p-2" placeholder="Inserte un número" />
        <select className="border border-gray-300 p-2">
          <option hidden>Selecciona un operador</option>
          <option className="text-gray-700">+</option>
          <option className="text-gray-700">-</option>
          <option className="text-gray-700">*</option>
          <option className="text-gray-700">/</option>
        </select>
        <input type="number" className="border border-gray-300 p-2" placeholder="Inserte un número" />
      </div>
      <button 
        onClick={handleCalculate}
        className="bg-blue-600 rounded-md px-4 py-2 hover:bg-blue-700 transition-colors cursor-pointer"
      >
        Calcular
      </button>
    </div>
  );
}
