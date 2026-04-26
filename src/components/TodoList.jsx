import { useRecoilValue, useRecoilState } from 'recoil';
import { listaFiltradaState, filtroTodoState, listaTodoState } from '../recoil/todoState';

export default function TodoList() {
  const listaFiltrada = useRecoilValue(listaFiltradaState);
  const [filtro, setFiltro] = useRecoilState(filtroTodoState);
  const [listaGeral, setListaGeral] = useRecoilState(listaTodoState);

  // Função para marcar como concluída/pendente
  const toggleConcluido = (id) => {
    const novaLista = listaGeral.map(item => 
      item.id === id ? { ...item, estaConcluido: !item.estaConcluido } : item
    );
    setListaGeral(novaLista);
  };

  // Função para remover
  const removerTarefa = (id) => {
    setListaGeral(listaGeral.filter(item => item.id !== id));
  };

  return (
    <div>
      <div className="mb-4">
        Filtro: 
        <select value={filtro} onChange={(e) => setFiltro(e.target.value)} className="ml-2 border">
          <option value="Todas">Todas</option>
          <option value="Concluídas">Concluídas</option>
          <option value="Pendentes">Pendentes</option>
        </select>
      </div>

      <ul>
        {listaFiltrada.map((item) => (
          <li key={item.id} className="flex gap-4 mb-2 items-center">
            <span style={{ textDecoration: item.estaConcluido ? 'line-through' : 'none' }}>
              {item.texto}
            </span>
            <button onClick={() => toggleConcluido(item.id)} className="text-sm bg-green-200 px-1">
              {item.estaConcluido ? 'Desfazer' : 'Concluir'}
            </button>
            <button onClick={() => removerTarefa(item.id)} className="text-sm bg-red-200 px-1">
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}