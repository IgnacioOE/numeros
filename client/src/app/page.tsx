

export default function Home() {
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
        type="submit"
        className="bg-blue-600 rounded-md px-4 py-2 hover:bg-blue-700 transition-colors cursor-pointer"
      >
        Calcular
      </button>
    </div>
  );
}
