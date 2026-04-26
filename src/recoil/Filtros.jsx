import { useRecoilState } from 'recoil';
import { filtroTodoState } from '../recoil/atoms';

export default function Filtros() {
  const [filtro, setFiltro] = useRecoilState(filtroTodoState);

  return (
    <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
      <option value="Todas">Todas</option>
      <option value="Concluídas">Concluídas</option>
      <option value="Pendentes">Pendentes</option>
    </select>
  );
}