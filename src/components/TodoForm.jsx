import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { listaTodoState } from '../recoil/todoState';

export default function TodoForm() {
  const [texto, setTexto] = useState('');
  const setLista = useSetRecoilState(listaTodoState);

  const adicionarTarefa = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;

    setLista((listaAntiga) => [
      ...listaAntiga,
      { id: Date.now(), texto: texto, estaConcluido: false }
    ]);
    setTexto('');
  };

  return (
    <form onSubmit={adicionarTarefa} className="flex gap-2 mb-4">
      <input 
        type="text" 
        value={texto} 
        onChange={(e) => setTexto(e.target.value)}
        placeholder="O que precisa ser feito?"
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add</button>
    </form>
  );
}