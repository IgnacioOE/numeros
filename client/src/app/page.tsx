'use client'
import { useState } from 'react';

export default function Home() {
  const [num1, setNum1] = useState<number | null>(null);
  const [num2, setNum2] = useState<number | null>(null);
  const [op, setOp] = useState<string | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleCalculate= async () => {
    setLoading(true);
    if (num1 === null || num2 === null || op === '') {
      alert('Complete todos los campos para continuar');
      return;
    }
    try {
      const response = await fetch(`http://localhost:3001/result?num1=${num1}&num2=${num2}&op=${op}`)
      const data = await response.json();
      setResult(data.result);
    } finally{
      setLoading(false)
    }
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
      <div className="font-bold text-gray-300">
          {loading && <p>Loading...</p>}
      </div>
      {result !== null && <div className="font-bold text-gray-300 mt-4">
        {result}
        </div>}
    </div>
  );
}
