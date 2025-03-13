'use client'
import { useState } from 'react';

export default function Home() {
  const [num1, setNum1] = useState<number | null>(null);
  const [num2, setNum2] = useState<number | null>(null);
  const [op, setOp] = useState<string | null>(null);
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate= async () => {
    if (num1 === null || num2 === null || op === '') {
      alert('Complete todos los campos para continuar');
      return;
    }
    const response = await fetch('http://localhost:3001/result')
    const data = await response.json();
    setResult(data.result);
    
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <div className="grid grid-cols-3 gap-4">
        <input type="number" className="border border-gray-300 p-2" 
        placeholder="Inserte un número" 
        onChange={(e) => setNum1(parseFloat(e.target.value))}
        />
        <select className="border border-gray-300 p-2"
        onChange={(e) => setOp(e.target.value)}
        >
          <option hidden>Selecciona un operador</option>
          <option className="text-gray-700">+</option>
          <option className="text-gray-700">-</option>
          <option className="text-gray-700">*</option>
          <option className="text-gray-700">/</option>
        </select>
        <input type="number" className="border border-gray-300 p-2" 
        placeholder="Inserte un número" 
        onChange={(e) => setNum2(parseFloat(e.target.value))}
        />
      </div>
      <button 
        onClick={handleCalculate}
        className="bg-blue-600 rounded-md px-4 py-2 hover:bg-blue-700 transition-colors cursor-pointer"
      >
        Calcular
      </button>
      {result !== null && <div className="mt-4">
        {result}
        </div>}
    </div>
  );
}
